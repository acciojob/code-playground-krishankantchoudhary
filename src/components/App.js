import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      

      {isAuthenticated ? (
        <>
          <p><b>Logged in, Now you can enter Playground</b></p>
          <ul>
            <li><Link to="/playground">PlayGround</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </>
      ) : (
        <p>You are not authenticated, Please login first</p>
      )}

      <Routes>
        {/* 🔑 ROOT ROUTE (VERY IMPORTANT) */}
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

        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/playground"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Playground setIsAuthenticated={setIsAuthenticated} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
