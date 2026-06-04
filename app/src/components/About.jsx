import profile from "../assets/profile.png";
import { FaAward, FaBriefcase, FaFolderOpen } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          About Me
        </h2>

        <p className="text-center text-gray-500 mt-2">
          My Introduction
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

          <div className="flex justify-center">
            <img
              src={profile}
              alt=""
              className="w-[350px] rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="bg-white shadow-md rounded-2xl p-5 text-center">
                <FaAward className="mx-auto text-2xl mb-2 text-indigo-500" />
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-gray-500">
                  Fresher
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 text-center">
                <FaBriefcase className="mx-auto text-2xl mb-2 text-indigo-500" />
                <h3 className="font-semibold">Internships</h3>
                <p className="text-sm text-gray-500">
                  2+ Completed
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 text-center">
                <FaFolderOpen className="mx-auto text-2xl mb-2 text-indigo-500" />
                <h3 className="font-semibold">Projects</h3>
                <p className="text-sm text-gray-500">
                  10+ Completed
                </p>
              </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
              I am a Computer Science Engineering student
              passionate about Full Stack Development,
              React, JavaScript, Tailwind CSS and building
              modern web applications. I enjoy solving
              real-world problems and continuously learning
              new technologies.
            </p>

            <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl">
              Download CV
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;