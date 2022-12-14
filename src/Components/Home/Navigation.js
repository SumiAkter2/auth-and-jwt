import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Navigation = () => {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <NavLink to="/" className="fs-3 fw-bold">
    //       Jwt Implement
    //     </NavLink>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: "100px" }}
    //         navbarScroll
    //       ></Nav>
    //       <NavLink to="/" className="me-2 fw-bold">
    //         Home
    //       </NavLink>
    //       <Navbar className="ms-5 me-5">{user?.displayName} </Navbar>

    //       {user ? (
    //         <NavLink
    //           to="/login"
    //           className="me-2 fw-bold"
    //           onClick={() => signOut()}
    //         >
    //           Sign Out
    //         </NavLink>
    //       ) : (
    //         <NavLink to="/login" className="me-2 fw-bold">
    //           Log In
    //         </NavLink>
    //       )}
    //       <Form className="d-flex ">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Random User
        </Link>
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
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
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
