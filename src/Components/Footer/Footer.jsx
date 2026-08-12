import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" mt-30">

      {/* Footer Card */}
      <div className=" bg-white  px-8 py-12 ">

        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Name & Role */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Zulfiqar Ali
            </h2>

            <p className="text-gray-500 mt-2">
              Full Stack Developer
            </p>
          </div>


          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="#home"
              className="text-black hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-black hover:text-blue-600 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-black hover:text-blue-600 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-black hover:text-blue-600 transition"
            >
              Contact
            </a>

          </div>


          {/* Social Icons */}
          <div className="flex gap-5">

  {/* LinkedIn */}
  <a
    href="#"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <FaLinkedin size={30} />
  </a>

  {/* Twitter */}
  <a
    href="#"
    className="text-gray-500 hover:text-sky-500 transition"
  >
    <FaTwitter size={30} />
  </a>

  {/* GitHub */}
  <a
    href="#"
    className="text-gray-500 hover:text-gray-900 transition"
  >
    <FaGithub size={22} />
  </a>

</div>

        </div>


        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Zulfiqar Ali. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;