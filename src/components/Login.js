import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div>
      <h3>Login Page</h3>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
