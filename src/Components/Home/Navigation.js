import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Navigation = () => {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink to="/" className="fs-3 fw-bold">
          Jwt Implement
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <NavLink to="/" className="me-2 fw-bold">
            Home
          </NavLink>
          <Navbar className="ms-5 me-5">{user?.displayName} </Navbar>

          {user ? (
            <NavLink
              to="/login"
              className="me-2 fw-bold"
              onClick={() => signOut()}
            >
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/login" className="me-2 fw-bold">
              Log In
            </NavLink>
          )}
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
