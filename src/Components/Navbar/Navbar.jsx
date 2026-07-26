import React from "react";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold cursor-pointer">
            <span className="text-blue-600">&lt;</span>
            <span className="text-gray-900 mx-1">Zulfiqar Ali</span>
            <span className="text-blue-600">/&gt;</span>
          </h2>

          {/* Menu */}
          <ul className="flex items-center gap-10 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              About
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Skills
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Certificates
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Projects
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Contact
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;