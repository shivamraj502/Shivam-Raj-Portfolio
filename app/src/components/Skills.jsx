import "./Skills.css";

function Skills() {

const skills = [

"Java",
"C",
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"Express.js",
"MongoDB",
"MySQL",
"Mongoose",
"REST APIs",
"Git",
"GitHub",
"Flutter",
"Arduino",
"OpenCV",
"YOLOv8",
"Deep Learning"

];

return (

<section className="skills" id="skills">

<div className="section-title">

<h2>Skills</h2>

</div>

<div className="skills-grid">

{skills.map((skill,index)=>(

<div className="skill-card" key={index}>

{skill}

</div>

))}

</div>

</section>

);

}

export default Skills;