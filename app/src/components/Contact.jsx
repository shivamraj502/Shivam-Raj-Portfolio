import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-card">

          <h3>Let's Connect 👋</h3>

          <p>
            I am always open to internship opportunities,
            collaborations, and software development projects.
          </p>

          <div className="contact-info">

            <p>
              📧
              <a href="mailto:shivamraj81020051@gmail.com">
                shivamraj81020051@gmail.com
              </a>
            </p>

            <p>
              📱
              <a href="tel:+919798021232">
                +91 9798021232
              </a>
            </p>

            <p>
              📍 Bengaluru, India
            </p>

          </div>

          <div className="social-buttons">

            <a
              href="https://github.com/shivamraj502"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-raj-420275294/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/shivam_raj9798/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>

            <a
              href="https://x.com/shivamraj795609"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;