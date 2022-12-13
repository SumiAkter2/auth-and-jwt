import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Google from "./Google";
import { InputGroup } from "react-bootstrap";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const passwordHandle = (e) => {
    const passwordInput = e.target.value;
    //   const pass='^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'
    if (/.{6,}/.test(passwordInput)) {
      setPassword({
        value: passwordInput,
        error: "",
      });
    } else {
      setPassword({
        value: "",
        error: "Please provide minimum 8 characters",
      });
    }
  };
  const emailHandle = (e) => {
    const emailInput = e.target.value;
    if (/^\S+@\S+\.\S+$/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Provide a valid Email" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }
    console.log(email, password);
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Log In</h1>
      <Form onClick={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onBlur={emailHandle}
          />
          {email.error && (
            <Form.Text className="text-danger fw-bold">{email.error}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <p className="d-flex ">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onBlur={passwordHandle}
            />

            <span>
              {showPassword ? (
                <AiFillEye
                  className="icon"
                  size="30px"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="icon "
                  size="30px"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </span>
          </p>
          {password.error && (
            <Form.Text className="text-danger fw-bold">
              {password.error}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        {email.value && password.value ? (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Button disabled variant="primary" >
            Submit
          </Button>
        )}
      </Form>
      <Google />
    </div>
  );
};

export default LogIn;
