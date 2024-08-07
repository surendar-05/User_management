import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForms from "./UserForms";

const UserDetails = ({ users, updateUser, deleteUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((user) => user.id.toString() === id);

  if (!user) {
    return <h2>User not found</h2>;
  }

  const handleDelete = () => {
    deleteUser(user.id);
    navigate("/users");
  };

  return (
    <div>
      <h2>User Details</h2>
      <UserForms editUser={updateUser} initialData={user} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserDetails;
