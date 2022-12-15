import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillFastBackward } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./user.css";
const User = ({ user, children }) => {
  const { name, id, website, username } = user || {};
  const { email, phone } = children || {};
  const navigate = useNavigate();
  return (
    <div className="mt-5 col-lg-4 col-md-6 col-sm-12 g-5 container ">
      <div className="cards mt-5">
        <div className="cards-img ">
          <div className="blob ">
            {username ? <h1 className="p-2">{name[0]}</h1> : ""}
          </div>
        </div>
        <div>
          <p className="text-title cards-info d-flex justify-content-between">
            {name} <span> Id:{id}</span>
          </p>
          <div className="text-body">
            <p className="">{email} </p>
            <p className="">{phone} </p>
            <p>{website} </p>
          </div>
        </div>
        {email ? (
          <div className="cards-footer">
            <span
              className="d-flex justify-content-center align-items-center details-button"
              onClick={() => navigate(`/user/${id}`)}
            >
              <AiFillFastBackward className="" size="30px" />
              Back
            </span>
          </div>
        ) : (
          <div className="cards-footer">
            <span
              className="d-flex justify-content-center align-items-center details-button"
              onClick={() => navigate(`/user/${id}`)}
            >
              <BsInfoCircleFill className="" size="30px" />
              Details
            </span>
            <div className="d-flex ">
              <BsFacebook className="cards-button me-2" />
              <FaTwitterSquare className="cards-button" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
