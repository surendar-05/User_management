import React, { useState } from "react";
import UserForms from "./UserForms";

const UserItems = ({ user, updateUser, deleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedUser) => {
    updateUser(user.id, updatedUser);
    setIsEditing(false);
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      {isEditing ? (
        <UserForms editUser={handleEdit} initialData={user} />
      ) : (
        <>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default UserItems;
