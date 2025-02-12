import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login"; // Ensure this is the correct import path

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Title */}
        <Link to="/" className="text-2xl font-bold">
          Hero Voting App
        </Link>
        {/* Login Button */}
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
