import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContextBase";
import { deleteUsername } from "../services/userApi";
import { useNavigate } from "react-router-dom";

const DeleteUserButton = () => {
  const [message, setMessage] = useState("");
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  let navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the user? This action cannot be undone.`
    );
    if (!confirmDelete) return;

    try {
      const response = await deleteUsername();
      sessionStorage.removeItem('token')
      setUser({ username: null })
      setIsLoggedIn(false)
      navigate('/')
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="delete-user-container">
      <button onClick={handleDelete} className="btn btn-danger">
        Delete User
      </button>
      {message && <p className="delete-user-message">{message}</p>}
    </div>
  );
};

export default DeleteUserButton;
