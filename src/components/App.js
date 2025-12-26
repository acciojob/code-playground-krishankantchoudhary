import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <h2>Code Playground</h2>

      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>

      <p>
        Authentication Status:{" "}
        <strong>
          {isAuthenticated ? "Authenticated" : "Not Authenticated"}
        </strong>
      </p>

      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
