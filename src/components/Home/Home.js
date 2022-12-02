import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import User from "./User";

const Home = () => {
  const users = useLoaderData();

  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you want to deltete ${user.user.name}`);
    if (agree) {
      fetch(`http://localhost:5000/users/${user.user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleting successfully");
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user.user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h1>Users : {displayUsers.length}</h1>
      {displayUsers.map((user) => (
        <User key={user._id} user={user} handleDelete={handleDelete}></User>
      ))}
    </div>
  );
};

export default Home;
