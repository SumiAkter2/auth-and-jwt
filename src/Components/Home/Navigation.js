import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import auth from "../../Firebase/firebase.init";

const Navigation = () => {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  let activeStyle = {
    color: "darkViolet",
    textDecoration: "underline",
  };
  let nonActiveStyle = {
    color: "purple",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Random User
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                aria-current="page"
                to="/"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                to="/users"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                to="/login"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            {!user ? (
              "USER"
            ) : (
              <span>
                {user.email}
                <button
                  onClick={() => signOut(auth)}
                  type="button"
                  className="btn btn-light"
                >
                  Sign Out
                </button>
              </span>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
