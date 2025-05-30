import React from "react";
import Form from "../components/Form";
import { createUser } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css"


const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
      const response = await createUser(data);
      navigate("/login");
      return response;
  };

  const fields = [
    {
      name: "username",
      label: "Username",
      validation: { required: "Username is required" },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: {
        required: "Password is required",
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters",
        },
      },
    },
  ];

  return (
    <div className="wrapper">
      <div className="form-container">
        <h2 id="label">Create new user</h2>
        <Form fields={fields} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Register;
