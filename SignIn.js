// src/SignIn.js
import React from "react";
import { auth, provider, signInWithPopup } from "./firebase";

const SignIn = () => {
  const handleLogin = async () => {
    console.log("Login button clicked"); // Debug log
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user); // Debug log
      window.location.href = "/dashboard"; // Redirect after login
    } catch (error) {
      console.error("Error during Google sign-in:", error.message); // Debug log
    }
  };

  return (
    <div>
      <h1>Sign In with Google</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default SignIn;