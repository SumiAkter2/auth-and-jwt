import React from "react";
import useUsers from "../../Hook/useUsers";
import User from "./User";

const Users = () => {
  const users = useUsers(`https://jsonplaceholder.typicode.com/users`);
  console.log(users.length, users);
  return (
    
        <div className="row container mx-auto">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
    
  );
};

export default Users;
