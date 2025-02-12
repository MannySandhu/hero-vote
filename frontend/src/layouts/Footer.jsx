import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center p-3 mt-auto">
      <p>© {new Date().getFullYear()} Hero Voting App. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
