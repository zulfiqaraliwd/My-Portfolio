import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-6 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-xl sm:text-2xl font-bold cursor-pointer">
          <span className="text-blue-600">&lt;</span>
          <span className="text-gray-900 mx-1">Zulfiqar Ali</span>
          <span className="text-blue-600">/&gt;</span>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-center gap-5 py-4 border-t text-gray-700 font-medium">

          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>
      )}
    </nav>
  );
}

export default Navbar;