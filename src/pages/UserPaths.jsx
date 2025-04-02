import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getPaths, deletePath } from "../services/pathApi";
import Button from "../components/Button"
import Loading from "../components/Loading"
import UserContext from "../contexts/UserContextBase";
import "../styles/UserPaths.css";

const UserPaths = () => {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setServerMessage } = useContext(UserContext);


  const navigate = useNavigate()

const handleNavigate = (pathData) => {
    navigate("/user-path", { state: { pathData } }); 
  };

const handleDelete = async (pathData) => {
    setLoading(true);
    try {
      const response = await deletePath(pathData["path_id"]);
      setServerMessage({ type: "success", text: response.message });
      setPaths((prevPaths) => prevPaths.filter((path) => path.path_id !== pathData.path_id));
    } catch (error){
      setServerMessage({ type: "failed", text: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchPaths = async () => {
      const sessionToken = sessionStorage.getItem("token");
      if (!sessionToken) {
        navigate("/login");
      } else {
        try {
          const data = await getPaths();
          setPaths(data.paths || []);
        } catch (error) {
          console.error("Error fetching paths:", error);
        }
      }
    };

    fetchPaths();
  }, [navigate]);

  return (
    <div>
      <h1 className="page-heading">Saved paths</h1>
      {loading && <Loading/>}
      {paths.length > 0 ? (
        <div>
        <ul className="path-container">
          {paths.map((path, index) => (
            <li key={index} className="path-card">
              <h3 className="">{path.title}</h3>
              <p>Distance: {path.distance}</p>
              <p>Time: {path.time}</p>
              <div className="path-button-container">
              <Button text="View Path" onClick={() => handleNavigate(path)} />
              <Button className="btn btn-danger" text="Delete Path" onClick={() => handleDelete(path)} />
              </div>
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <p>You have no saved paths.</p>
      )}
    </div>
  );
};

export default UserPaths;
