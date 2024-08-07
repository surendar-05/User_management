import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserForm from "./UserForms";
import UserList from "./UserLists";
import UserDetail from "./UserDetails";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <h1>User Management</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
            <li>
              <Link to="/users">User List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome to User Management</h2>} />
          <Route path="/add-user" element={<UserForm addUser={addUser} />} />
          <Route
            path="/users"
            element={
              <UserList
                users={users}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            }
          />
          <Route
            path="/users/:id"
            element={
              <UserDetail
                users={users}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
