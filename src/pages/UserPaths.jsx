import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPaths = () => {
    const [token, setToken] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("token");
        if (!sessionToken) {
            navigate("/login");
        } else {
            setToken(sessionToken);
        }
    }, [navigate]);
    return (
        <div>UserPaths</div>
    )
}

export default UserPaths