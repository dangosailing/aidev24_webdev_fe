import React, { useState } from 'react';
import { deleteUsername } from '../services/userApi';

const DeleteUserButton = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    if (!username) {
      setMessage('Please enter a username.');
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete the user "${username}"? This action cannot be undone.`
    );
    if (!confirmDelete) return;

    try {
      const response = await deleteUsername({ username });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="delete-user-container">
      <input
        type="text"
        placeholder="Username to delete"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="delete-user-input"
      />
      <button onClick={handleDelete} className="btn btn-danger">
        Delete User
      </button>
      {message && <p className="delete-user-message">{message}</p>}
    </div>
  );
};

export default DeleteUserButton;