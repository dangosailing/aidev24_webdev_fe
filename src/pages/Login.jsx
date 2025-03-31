import React, { useContext } from "react";
import { login } from "../services/userApi";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContextBase";

const Login = () => {
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  let navigate = useNavigate();

  const onSubmit = async (data) => {
      const response = await login(data);
      setUser({ username: data.username });
      setIsLoggedIn(true);
      navigate("/profile");
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
      },
    },
  ];

  return (
    <div>
      <h2>Login</h2>
      <Form fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
