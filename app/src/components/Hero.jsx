import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="flex gap-10">

            <div className="flex flex-col gap-8 text-2xl text-indigo-500">

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaGithub />
              </a>

            </div>

            <div>

              <h1 className="text-6xl font-bold leading-tight">
                Hi, I'm
                <br />
                Shivam
              </h1>

              <h3 className="text-2xl mt-4 font-semibold text-gray-700">
                CSE Student | Full Stack Developer
              </h3>

              <p className="mt-6 text-gray-500 max-w-lg leading-8">
                Passionate Computer Science Engineering
                student focused on building modern
                web applications with React,
                Tailwind CSS and JavaScript.
              </p>

              <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl">
                Contact Me →
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="w-[350px] h-[350px] bg-indigo-500 rounded-[50%_40%_60%_30%] overflow-hidden">

              <img
                src="/profile.png"
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;