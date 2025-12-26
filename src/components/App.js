import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">

      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </p>

      {/* 🔑 UL STRUCTURE CYPRESS EXPECTS */}
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        {/* 🔥 THIS IS THE MISSING PIECE */}
        {isAuthenticated && (
          <li>Hi Welcome to Code PlayGround</li>
        )}
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
