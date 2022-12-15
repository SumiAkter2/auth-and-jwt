import React from "react";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import "./Login.css";
const LogIn = () => {
  return (
    <div className="container">
      <div class="card">
        <h4 class="title">Log In!</h4>
        <form>
          <div class="field">
            <MdAlternateEmail class="input-icon" />

            <input
              autocomplete="off"
              id="logEmail"
              placeholder="Email"
              class="input-field"
              name="logEmail"
              type="email"
            />
          </div>
          <div class="field">
            <RiLockPasswordLine class="input-icon" />

            <input
              autocomplete="off"
              id="logPass"
              placeholder=" Password"
              class="input-field"
              name="logPass"
              type="password"
            />
          </div>
          <div class="field">
            <GiConfirmed class="input-icon" />

            <input
              autocomplete="off"
              id="logConfirm"
              placeholder="Confirm Password"
              class="input-field"
              name="logConfirm"
              type=" password"
            />
          </div>
          <p class="redirect mt-2">
            Forgot your password?
            <Link href="/" className="Link ms-2">
              Please Reset
            </Link>
          </p>
          <button class="learn-more ">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text ">Log In</span>
            <br />
          </button>

          <p class="redirect">
            New Here?
            <Link to="/signup" className="Link ms-2">
              Please Sign Up
            </Link>
          </p>
          <button class="learn-more ">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text ps-3">Google Sign Up</span>
          </button>
        </form>
      </div>

      {/* google */}
    </div>
  );
};

export default LogIn;
