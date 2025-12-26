import React from "react";

const Playground = ({ setIsAuthenticated }) => {
  return (
    <div>
      <h3>Hi Welcome to Code PlayGround</h3>

      <button onClick={() => setIsAuthenticated(false)}>
        Log Out
      </button>
    </div>
  );
};

export default Playground;
