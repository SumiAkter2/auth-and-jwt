import React from "react";
import { Link } from "react-router-dom";
import useUsers from "../../Hook/useUsers";
import User from "./User";

const AllUsers = () => {
  const allUsers = useUsers("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="row container mx-auto ">
      {allUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <Link to="/users">Load more</Link>
    </div>
  );
};

export default AllUsers;
