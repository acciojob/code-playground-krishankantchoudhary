import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">

      {/* 🔑 SAME <p> ALWAYS EXISTS */}
      <p style={{ display: isAuthenticated ? "none" : "block" }}>
        You are not authenticated, Please login first
      </p>

      <p style={{ display: isAuthenticated ? "block" : "none" }}>
        Logged in, Now you can enter Playground
      </p>

      {/* LINKS MUST ALWAYS EXIST */}
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
