import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className="block p-2 hover:bg-gray-700 rounded">
            📊 Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/vote" className="block p-2 hover:bg-gray-700 rounded">
            🗳️ Vote
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
