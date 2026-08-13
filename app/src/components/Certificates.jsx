import "./Certificates.css";

function Certificates() {

  const certificates = [
    {
      title: "Responsible & Safe AI Systems",
      issuer: "NPTEL",
      year: "2025",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs118/Course/NPTEL25CS118S25260235910856134.pdf"
    },

    {
      title: "System Design for Sustainability",
      issuer: "NPTEL",
      year: "2025",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/107/noc25-de21/Course/NPTEL25DE21S95260233210856134.pdf"
    },

    {
      title: "Cognizant Technoverse Hackathon 2026",
      issuer: "Cognizant",
      year: "2026",
      link: "https://cdn2.joinsuperset.com/public/ej-certificates/ce18f206-58f9-11f1-850f-06cf9393edf9.html"
    }
  ];

  return (
    <section className="certificates" id="certifications">

      <div className="section-title">
        <h2>Certificates</h2>
      </div>

      <div className="certificate-grid">

        {certificates.map((item, index) => (

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
            key={index}
          >
            <h3>{item.title}</h3>
            <p>{item.issuer}</p>
            <span>{item.year}</span>
          </a>

        ))}

      </div>

    </section>
  );
}

export default Certificates;