import React from 'react';
import './App.css';
import doniaImage from './assets/cvv.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';



function App() {
  return (
    <div className="App">
      {/* Barre de navigation */}
      <nav className="navbar">
        <h3 className="logo">Donia Manai</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-icons">
  <a href="https://www.linkedin.com/in/donia-manai-a48a99105/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={24} color="#0077b5" />
  </a>
  <a href="https://github.com/Doniamanaiensi" target="_blank" rel="noopener noreferrer">
    <FaGithub size={24} color="#333" />
  </a>
</div>
      </nav>

      {/* Section Home */}
      <section id="home" className="section header">
        <div className="header-text">
          <h1>Hi there! I'm Donia</h1>
          <p>Data Scientist passionate about AI and Computer Vision.</p>
          <em>Turning data into smart solutions for the future.</em>
          <div className="header-buttons">
            <button className="btn-primary">View My Work</button>
           <a href="#contact" className="btn-outline">Let's Connect</a>
          </div>
        </div>
        <div className="header-image">
         <img src={doniaImage} alt="Donia" />
        </div>
      </section>

      {/* Section About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I am a Data Scientist graduated from ENSI with a strong background in AI, ML, and computer vision.</p>
      </section>

      {/* Section Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Python, Java, C++</li>
          <li>React.js, HTML/CSS</li>
          <li>TensorFlow, PyTorch, YOLO</li>
          <li>PostgreSQL, MySQL</li>
        </ul>
      </section>

      {/* Section Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Coming soon: project cards with images and links.</p>
      </section>

      {/* Section Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <p>Several internships in web development and data science, including a final project on multitask learning for railway monitoring.</p>
      </section>

      {/* Section Resume */}
      <section id="resume" className="section">
        <h2>Resume</h2>
        <a href="/Donia_Manai_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Download My CV
        </a>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
