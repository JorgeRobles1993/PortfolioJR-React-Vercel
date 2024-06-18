import React from 'react';

function AboutMe() {
  return (
    <div className="about-me section" id="about-me">
      <div className="content">
        <h2>About Me</h2>
        <div className="profile">
          <img src="images/JR_photo_CV.jpg" alt="Profile" />
          <h3>
          Hello! My name is Jorge Joan Robles, a 31-year-old junior web developer.

Although this is my first experience in the web development field, I firmly believe it is a viable and promising alternative for my professional career.

My motivation and passion for learning are unwavering, and I am determined to continue training and growing in this dynamic sector.

I am excited to take on new challenges and contribute my skills and creativity to exciting projects.

Thank you for visiting my portfolio!
          </h3>
        </div>
        <div className="contact-links">
          <h2>Contact Me:</h2>
          <div className="links">
            <a href="https://github.com/JorgeRobles1993" target="_blank" rel="noopener noreferrer">
             <img src="images/PDF_file.png" alt="Resume" />GitHub
            </a>
            <a href="https://discord.com/users/247209570148155392" target="_blank" rel="noopener noreferrer">
             <img src="images/PDF_file.png" alt="Resume" /> Discord
            </a>
            <a href="https://www.linkedin.com/in/jorge-joan-robles-062723307/" target="_blank" rel="noopener noreferrer">
                <img src="images/PDF_file.png" alt="Resume" />LinkedIn
            </a>
          </div>
          <div className="resume">
            <a href="https://drive.google.com/file/d/1Ck1y3kLJ-5QJVV4Z3tSz_Lkxvc4qfinO/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <img src="images/PDF_file.png" alt="Resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
