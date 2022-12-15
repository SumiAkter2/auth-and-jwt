import React from "react";
import { useParams } from "react-router-dom";
import useUsers from "../../Hook/useUsers";
import User from "./User";

const UserInfo = () => {
  let { userId } = useParams();

  const allUsers = useUsers(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );
  console.log(allUsers);
  return (
    <div>
      <User user={allUsers[0]} key={allUsers.id}>
        {{ email: allUsers[0]?.email, phone: allUsers[0]?.phone }}
      </User>
    </div>
  );
};

export default UserInfo;
