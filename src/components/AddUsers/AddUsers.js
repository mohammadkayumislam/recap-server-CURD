import React, { useState } from "react";

const AddUsers = () => {
  const [users, setUsers] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User added successfully");
          event.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUsers = { ...users };
    newUsers[field] = value;
    setUsers(newUsers);
  };

  return (
    <div>
      <h2>Please add a new User</h2>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;
