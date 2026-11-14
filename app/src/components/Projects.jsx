import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",

      description:
        "Engineered a responsive personal portfolio website to showcase projects, technical skills, and achievements through a modern and user-friendly interface. ",

      github: "https://github.com/shivamraj502/portfolio",

      demo: "https://shivam-raj-portfolio.vercel.app/",
    },

    {
      title: "Task Manager App",

      description:
        "Full Stack Task Manager using React, Node.js, Express and MongoDB with CRUD operations and authentication.",

      github: "https://github.com/shivamraj502/Task-Manager",

      demo: "https://notes-fd.vercel.app/",
    },

    {
      title: "Sikhaba : Live Language Learning Platform ",

      description:
        "AI-powered language learning platform with real-time interaction and personalized learning paths.",

      github: "https://github.com/shivamraj502/Sikhaba",

      demo: "https://sikhaba-nwhe.vercel.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
