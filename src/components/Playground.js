import React from "react";
import { useNavigate } from "react-router-dom";

const Playground = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/"); // 🔑 IMPORTANT CHANGE
  };

  return (
    <div>
      <h3>Hi Welcome to Code PlayGround</h3>

      <button onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Playground;
