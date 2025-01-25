// src/Dashboard.js

import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
  const user = getAuth().currentUser;

  const handleLogout = () => {
    signOut(getAuth()).then(() => {
      console.log("User logged out");
      window.location.href = "/"; // Redirect to the login page
    });
  };

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <img src={user.photoURL} alt={user.displayName} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
