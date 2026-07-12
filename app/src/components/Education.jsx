import "./Education.css";

function Education() {

  const education = [
    {
      degree: "Bachelor of Engineering (CSE)",
      college: "S.J.B. Institute of Technology",
      year: "2023 - 2027",
      score: "CGPA: 8.15"
    },

    {
      degree: "Higher Secondary",
      college: "Sadar Alam Memorial Secondary School",
      year: "2021 - 2023",
      score: "72.20%"
    },

    {
      degree: "Secondary",
      college: "Sadar Alam Memorial Secondary School",
      year: "2019 - 2020",
      score: "80.20%"
    }

  ];

  return (

    <section className="education" id="education">

      <div className="section-title">
        <h2>Education</h2>
      </div>

      <div className="timeline">

        {education.map((item, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>

              <p>{item.year}</p>

              <span>{item.score}</span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Education;