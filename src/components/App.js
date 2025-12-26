import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      {/* ✅ SINGLE <p> — Cypress reads THIS */}
      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </p>

      {/* ✅ LINKS MUST ALWAYS EXIST */}
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/playground"
          element={
            isAuthenticated ? (
              <Playground setIsAuthenticated={setIsAuthenticated} />
            ) : null
          }
        />
      </Routes>
    </div>
  );
};

export default App;
