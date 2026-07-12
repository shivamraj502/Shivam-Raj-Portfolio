import "./Achievements.css";

function Achievements(){

const achievements=[

"Participant - Cognizant Technoverse Hackathon 2026",

"NPTEL Certified in Responsible & Safe AI Systems",

"NPTEL Certified in System Design for Sustainability",

"Built Multiple Full Stack Projects",

"Learning DSA and System Design"

];

return(

<section className="achievements" id="achievements">

<div className="section-title">

<h2>Achievements</h2>

</div>

<div className="achievement-list">

{achievements.map((item,index)=>(

<div className="achievement-card" key={index}>

🏆 {item}

</div>

))}

</div>

</section>

);

}

export default Achievements;