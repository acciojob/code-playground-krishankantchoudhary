import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      {isAuthenticated ? (
        <p><b>Logged in, Now you can enter Playground</b></p>
      ) : (
        <p>You are not authenticated, Please login first</p>
      )}

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
        {/* ROOT */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/playground" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* PLAYGROUND (PROTECTED) */}
        <Route
          path="/playground"
          element={
            isAuthenticated ? (
              <Playground setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
