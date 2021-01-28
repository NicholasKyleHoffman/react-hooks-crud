import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  // update state based on event in input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        // default event for form is submit (preventing with a check)
        event.preventDefault();
        if (!user.name || !user.username) {
          alert("Enter both name and username");
          return;
        } else {
          props.addUser(user);
          setUser(initialFormState);
        }
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="btn btn-success">Add New User</button>
    </form>
  );
};

export default AddUserForm;
