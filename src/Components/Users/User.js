import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import "./user.css";
const User = ({ user }) => {
  return (
    <div className="mt-5 col-4 g-5 container mx-auto">
      <div class="cards mt-5">
        <div class="cards-img ">
          <div className="blob ">
            <h1 className="p-2">{user.name[0]}</h1>
          </div>
        </div>
        <div class="cards-info">
          <p class="text-title">{user.name} </p>
          <p class="text-body">{user.email} </p>
          {/* <p class="text-body">{user.company} </p> */}
        </div>
        <div class="cards-footer">
          <span class="cards-button">
            <BsFacebook />
          </span>
          <div class="cards-button">
            <FaTwitterSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
