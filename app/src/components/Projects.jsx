import "./Projects.css";

function Projects() {

const projects=[

{
title:"AI-Based Intelligent Surveillance System",

description:
"AI surveillance system using YOLOv8, Deep Learning and OpenCV for real-time object detection and monitoring.",

github:"https://github.com/shivamraj502/Ai-based-smart-surveillance-system",

demo:"#"
},

{
title:"Task Manager App",

description:
"Full Stack Task Manager using React, Node.js, Express and MongoDB with CRUD operations and authentication.",

github:"https://github.com/shivamraj502/Task-Manager",

demo:"#"
},

{
title:"StoxP",

description:
"Stock Market application using React and APIs to display real-time stock market information.",

github:"https://github.com/shivamraj502",

demo:"#"
}

];

return(

<section className="projects" id="projects">

<div className="section-title">

<h2>Projects</h2>

</div>

<div className="project-container">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<div className="project-buttons">

<a
href={project.github}
target="_blank"
rel="noreferrer"
>

GitHub

</a>

<a
href={project.demo}
target="_blank"
rel="noreferrer"
>

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