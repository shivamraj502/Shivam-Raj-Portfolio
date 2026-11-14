import "./Skills.css";

function Skills() {
  // const skills = [
  //   "Java",
  //   "JavaScript",
  //   "HTML5",
  //   "CSS3",
  //   "React.js",
  //   "Node.js",
  //   "Express.js",
  //   "RESTful APIs",
  //   "JWT Authentication",
  //   "CRUD Operations",
  //   "MVC Architecture",
  //   "MySQL",
  //   "MongoDB",
  //   "Git",
  //   "GitHub",
  //   "Postman",
  //   "VS Code",
  //   "IntelliJ IDEA",
  //   "Vercel",
  //   "Render",
  //   "Socket.io",
  //   "WebRTC / LiveKit",
  //   "Aiven",
  //   "DBMS",
  //   "DSA",
  //   "OOPs"
  // ];

  const skills = {
    languages: ["Java", "JavaScript"],
    frontend: ["HTML5", "CSS3", "React.js"],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "CRUD Operations",
      "MVC Architecture",
      "Socket.io",
    ],
    databases: ["MySQL", "MongoDB"],
    realtime: ["WebRTC / LiveKit"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
    deployment: ["Vercel", "Render", "Aiven"],
    fundamentals: ["DBMS", "DSA", "OOPs"],
  };

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {Object.values(skills)
          .flat()
          .map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
