import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUser from "../components/UpdateUser";
import DeleteUserButton from "../components/DeleteUserButton";
import UpdatePassword from "../components/UpdatePassword";

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
    <div className="container">
      <h1>Manage account</h1>
      <div className="primary-form-container">
        <UpdateUser />
      </div>
      <UpdatePassword/>
      <div className="delete-user-container">
        <DeleteUserButton />
      </div>
    </div>
  );
};

export default Account;