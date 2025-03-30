import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getPaths } from "../services/pathApi"

const UserPaths = () => {
    const [paths, setPaths] = useState([]);
    const navigate = useNavigate();

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
            <h1>Saved paths</h1>
            {paths.length > 0 ? (
                <ul>
                    {paths.map((path, index) => (
                        <li key={index}>
                            <h3>{path.title}</h3>
                            <p>Distance: {path.distance}</p>
                            <p>Time: {path.time}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have no saved paths.</p>
            )}
        </div>
    );
};

export default UserPaths;