import React from "react";
import "./Login.css";
const SignIn = () => {
  return (
    <div>
      <div class="inputbox">
        <input required="required" type="text" />
        <span>Username</span>
        <i></i>
      </div>
      <br />
      <br />
      <div class="inputbox">
        <input required="required" type="text" />
        <span>Phone</span>
        <i></i>
      </div>
    </div>
  );
};

export default SignIn;
