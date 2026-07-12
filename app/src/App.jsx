/**
Day 58 – Mini Project: React Portfolio

Task:
Sections: About Projects Contact
Add Tailwind styling
Deploy live
 */


// function App() {
//   return (
//     <h1>Hello, Portfolio is in development stage, please check back later!</h1>
//   )
// }
// export default App;


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />
      
      <Projects />
      
      <Education />

      <Certificates />

      <Achievements />

      <Contact />
      
      <Footer />

      <section id="projects"></section>

      <section id="education"></section>

      <section id="certifications"></section>

      <section id="achievements"></section>

      <section id="contact"></section>

    </>
  );
}

export default App;