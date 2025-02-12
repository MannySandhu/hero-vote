import React from "react";
import { auth, googleProvider } from "../config/firebase.config";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setToken }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken(); // Get Google ID Token

      // console.log("Google ID Token:", idToken); // Log for debugging (copy for Insomnia)

      // Send the ID token to the backend
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate with backend");
      }

      const data = await response.json();
      console.log("JWT from backend:", data.jwt); // Log JWT

      // Store JWT only if it exists
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        setToken(data.jwt);
      } else {
        console.error("Login failed: No JWT received from server");
      }
    } catch (error) {
      console.error("Login Failed:", error.message);
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default Login;
