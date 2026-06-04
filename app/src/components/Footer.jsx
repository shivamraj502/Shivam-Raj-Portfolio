import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-indigo-500 text-white py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Shivam Raj
        </h2>

        <div className="flex justify-center gap-8 mt-8">

          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="flex justify-center gap-6 mt-8 text-2xl">

          <FaLinkedin />
          <FaGithub />
          <FaInstagram />

        </div>

        <p className="mt-8 text-sm">
          © 2026 Shivam Raj. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;