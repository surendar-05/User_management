import React from 'react';
import { Link } from 'react-router-dom';

const UserLists = ({ users, updateUser, deleteUser }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <Link to={`/users/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default UserLists;
