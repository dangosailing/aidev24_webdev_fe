import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContextBase";
import "../styles/Profile.css";
import MapView from "../components/MapView";
import SpotifyIntegration from "../components/MoodMusic";
import { getPath } from "../services/pathApi";
import RunCard from "../components/RunCard";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [token, setToken] = useState("token");
  const [path, setPath] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPath = async () => {
      const sessionToken = sessionStorage.getItem("token");
      if (!sessionToken) {
        navigate("/login");
      } else {
        try {
          const data = await getPath();
          setPath(data.path || {});
        } catch (error) {
          console.error("Error fetching paths:", error);
        }
      }
    };

    fetchPath();
  }, [navigate]);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (!sessionToken) {
      navigate("/login");
    } else {
      setToken(sessionToken);
    }
  }, [navigate]);

  return (
    <>
      <div className="container">
        <h1 id="test-header" style={{ color: "black" }}>Welcome {user?.username}!</h1>
        <div
          style={{
            margin: "0",
            backgroundImage: `url(https://images.unsplash.com/photo-1530143311094-34d807799e8f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: 20,
            borderRadius: 8,
            color: "white",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <img
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              style={{
                borderRadius: "50%",
                width: 150,
                height: 150,
                objectFit: "cover",
                margin: "0 auto",
                display: "block",
              }}
            />
            <h1 style={{ color: "black" }}>{user?.username}</h1>
            <h3 style={{ color: "gray" }}>The Runner</h3>
          </div>
        </div>

        <MapView />

        <div>
          <div style={{ marginBottom: 30 }}>
            <h2>About me</h2>
            <p style={{ color: "#555", lineHeight: "1.5em" }}>
              Passionate runner from Gothenburg. Whether it’s a morning jog by
              the river or training for my next 10K, running keeps me grounded.
            </p>
          </div>

          <section
            className="hero-cta-section"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1603102859961-64b17d43580d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "40px 20px",
              margin: "40px 0",
              textAlign: "center",
              color: "white",
            }}
          >
            <h2 style={{ fontSize: "1rem", marginBottom: "20px" }}>
              Ready for your next run?
            </h2>
            <button
              onClick={() => (window.location.href = "/create-path")}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Create your route
            </button>
          </section>

          <div>
            <SpotifyIntegration />
          </div>

          <div>
          <NavLink to="/user-paths">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Runs</h2>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 10,
              }}
            >
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VlgH749hg6ISDssCUjMnTVtkEjFGf9Bfmg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VlgH749hg6ISDssCUjMnTVtkEjFGf9Bfmg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VlgH749hg6ISDssCUjMnTVtkEjFGf9Bfmg&s",
              ].map((run, index) => (
                <img
                  key={index}
                  src={run}
                  alt={`Run ${index + 1}`}
                  style={{ width: 100, height: 100, borderRadius: 8 }}
                />
              ))}
            </div>
            </NavLink>

            {path && (
              <div className="run-card-container">
                <RunCard
                  title={path.title}
                  distance={path.distance}
                  time={path.time}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
