import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/playground");
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
