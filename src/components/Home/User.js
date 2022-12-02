import React from "react";
import { Link } from "react-router-dom";

const User = ({ user, handleDelete }) => {
  const { _id, name, address, email } = user;
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
      <br />
      <button onClick={() => handleDelete({ user })}>X</button>
      <Link to={`/update/${_id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default User;
