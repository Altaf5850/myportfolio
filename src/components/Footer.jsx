import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Altaf Pathan</h2>
          <p className="text-sm text-[#00FF33]">Frontend Developer</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/Altaf5850"
            className="hover:text-gray-400"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/altaf-pathan-7180a2205"
            className="hover:text-gray-400"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://wa.me/9326337850" className="hover:text-gray-400">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Altaf Pathan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
