import { useState } from "react";
import { FaMoon } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Shivam
        </h1>

        <ul className="hidden md:flex gap-10 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <FaMoon
          className="text-xl cursor-pointer"
        />

      </nav>
    </header>
  );
}

export default Navbar;