import React from "react";
import { Link } from "react-router-dom";
import useUsers from "../../Hook/useUsers";
import User from "./User";

const Users = () => {
  const users = useUsers(`https://jsonplaceholder.typicode.com/users`);

  if (users.length) {
    users.length = 4;
  }
  return (
    <div className="row container mx-auto ">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <Link to="/users">Load more</Link>
    </div>
  );
};

export default Users;
