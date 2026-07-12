import "./Hero.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h3>Hello, I'm</h3>

        <h1>Shivam Raj</h1>

        <h2>Full Stack Developer</h2>

        <p>
          Computer Science Engineering student passionate about
          Full Stack Development, Java, AI and Software Engineering.
          I enjoy building modern web applications and solving
          real-world problems.
        </p>

        <div className="hero-buttons">

          <a
            href="#contact"
            className="btn"
          >
            Contact Me
          </a>

          <a
            href="https://shivam-raj-portfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            My Portfolio
          </a>

        </div>

        <div className="social-links">

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

      <div className="hero-right">

        <img
          src={profile}
          alt="Shivam Raj"
        />

      </div>

    </section>
  );
}

export default Hero;