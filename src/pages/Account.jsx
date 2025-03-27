import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUser from "../components/UpdateUser";

const Account = () => {
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
    <div>
      <h1>Manage account</h1>
      <UpdateUser />
    </div>
  );
};

export default Account;
