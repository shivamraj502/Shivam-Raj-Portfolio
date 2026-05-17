/**
Day 58 – Mini Project: React Portfolio

Task:
Sections: About Projects Contact
Add Tailwind styling
Deploy live
 */

import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Shivam Raj</h1>

            <div className="flex items-center gap-8">
              <a href="#about" className="hover:text-indigo-600 transition">About</a>
              <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
              <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-indigo-600">Shivam Raj</span>
            </h2>

            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
              Computer Science Engineering Student
            </p>

            <p className="text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
              Passionate about Full Stack Development, React, JavaScript, Tailwind CSS,
              and building modern web applications.
            </p>

            <a
              href="#projects"
              className="mt-10 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-medium transition"
            >
              View My Projects →
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://via.placeholder.com/500"
                  alt="Profile"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>

              <div className="space-y-6 text-lg">
                <p>
                  I'm Shivam Raj, a Computer Science and Engineering student
                  passionate about software development and modern web technologies.
                </p>

                <p>
                  Currently learning Full Stack Development with React, Tailwind CSS,
                  Node.js, MongoDB, and building real-world projects to improve my skills.
                </p>

                <p>
                  I enjoy solving problems, learning new technologies, and creating
                  clean and responsive user interfaces.
                </p>

                <div className="pt-4">
                  <h3 className="font-semibold mb-3">Skills</h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      'React',
                      'JavaScript',
                      'Tailwind CSS',
                      'Node.js',
                      'MongoDB',
                      'Git',
                      'HTML',
                      'CSS',
                      'Java'
                    ].map(skill => (
                      <span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              My Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Student Performance Dashboard",
                  desc: "Dashboard project built using React and Tailwind CSS."
                },
                {
                  title: "Pomodoro Timer App",
                  desc: "Productivity timer application for focused study sessions."
                },
                {
                  title: "Weather App",
                  desc: "Weather forecasting app using APIs and React."
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.desc}
                    </p>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700">
                        Live Demo
                      </button>

                      <button className="flex-1 border border-gray-300 dark:border-gray-600 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700">
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto text-center px-6">

            <h2 className="text-4xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              Open to internships, collaborations, and exciting opportunities in web development.
            </p>

            <a
              href="mailto:shivam@example.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full text-lg font-medium transition"
            >
              Contact Me
            </a>

            <div className="mt-12 flex justify-center gap-8 text-3xl">
              <a href="#" className="hover:text-indigo-600">💼</a>
              <a href="#" className="hover:text-indigo-600">💻</a>
              <a href="#" className="hover:text-indigo-600">📧</a>
            </div>

          </div>
        </section>

        <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
          © 2026 Shivam Raj • Computer Science Engineering Student
        </footer>

      </div>
    </div>
  );
}

export default App;