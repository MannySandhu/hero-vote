import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = ({ user, onLogin, onLogout, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-8">
          <Link to="/" className="text-2xl font-bold">Hero Voting App</Link>

          {/* User Info or Login Button */}
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-white"
              />
              <span className="text-lg">{user.name}</span>
              <button
                onClick={onLogout}
                className="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onLogin}
              className="bg-green-500 px-3 py-1 rounded-md text-white hover:bg-green-700"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
