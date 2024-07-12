import React, { useState } from 'react';

function AboutMe() {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const getHeadingText = () => {
    switch (language) {
      case 'english':
        return 'About Me';
      case 'french':
        return 'À Propos de Moi';
      case 'spanish':
        return 'Sobre Mí';
      default:
        return 'About Me';
    }
  };

  const getProfileDescription = () => {
    switch (language) {
      case 'english':
        return 'Hello! My name is Jorge Joan Robles, a 31-year-old junior web developer. Although this is my first experience in the web development field, I firmly believe it is a viable and promising alternative for my professional career. My motivation and passion for learning are unwavering, and I am determined to continue training and growing in this dynamic sector. I am excited to take on new challenges and contribute my skills and creativity to exciting projects. Thank you for visiting my portfolio!';
      case 'french':
        return 'Bonjour! Je m\'appelle Jorge Joan Robles, un développeur web junior de 31 ans. Bien que ce soit ma première expérience dans le domaine du développement web, je crois fermement que c\'est une alternative viable et prometteuse pour ma carrière professionnelle. Ma motivation et ma passion pour l\'apprentissage sont inébranlables, et je suis déterminé à continuer à me former et à progresser dans ce secteur dynamique. Je suis enthousiaste à l\'idée de relever de nouveaux défis et de contribuer avec mes compétences et ma créativité à des projets passionnants. Merci de visiter mon portfolio!';
      case 'spanish':
        return '¡Hola! Mi nombre es Jorge Joan Robles, un desarrollador web junior de 31 años. Aunque esta es mi primera experiencia en el campo del desarrollo web, creo firmemente que es una alternativa viable y prometedora para mi carrera profesional. Mi motivación y pasión por aprender son inquebrantables, y estoy decidido a seguir formándome y creciendo en este sector dinámico. Estoy emocionado por enfrentar nuevos desafíos y contribuir con mis habilidades y creatividad a proyectos emocionantes. ¡Gracias por visitar mi portafolio!';
      default:
        return 'Hello! My name is Jorge Joan Robles, a 31-year-old junior web developer. Although this is my first experience in the web development field, I firmly believe it is a viable and promising alternative for my professional career. My motivation and passion for learning are unwavering, and I am determined to continue training and growing in this dynamic sector. I am excited to take on new challenges and contribute my skills and creativity to exciting projects. Thank you for visiting my portfolio!';
    }
  };

  const getContactText = () => {
    switch (language) {
      case 'english':
        return 'Contact Me:';
      case 'french':
        return 'Contactez-moi:';
      case 'spanish':
        return 'Contáctame:';
      default:
        return 'Contact Me:';
    }
  };

  const getButtonVisibilityClass = (lang) => {
    return language === lang ? 'hidden' : '';
  };

  return (
    <div className="about-me section" id="about-me">
      <div className="content">
        <div className="language-buttons">
          <button 
            className={getButtonVisibilityClass('english')} 
            onClick={() => handleLanguageChange('english')}
          >
            English
          </button>
          <button 
            className={getButtonVisibilityClass('french')} 
            onClick={() => handleLanguageChange('french')}
          >
            Français
          </button>
          <button 
            className={getButtonVisibilityClass('spanish')} 
            onClick={() => handleLanguageChange('spanish')}
          >
            Español
          </button>
        </div>
        <h2>{getHeadingText()}</h2>
        <div className="profile">
          <img src="images/JR_photo_CV.jpg" alt="Profile" className="profile-pic" />
          <h3>{getProfileDescription()}</h3>
        </div>
        <div className="contact-links">
          <h2>{getContactText()}</h2>
          <div className="links">
            <div className="link-item">
              <a href="https://github.com/JorgeRobles1993" target="_blank" rel="noopener noreferrer">
                <img src="images/GitHubLogo.png" alt="GitHub" className="social-icon" />
              </a>
              <div className="link-text">GitHub</div>
            </div>
            <div className="link-item">
              <a href="https://discord.com/users/247209570148155392" target="_blank" rel="noopener noreferrer">
                <img src="images/DiscordLogo.png" alt="Discord" className="social-icon" />
              </a>
              <div className="link-text">Discord</div>
            </div>
            <div className="link-item">
              <a href="https://www.linkedin.com/in/jorge-joan-robles-062723307/" target="_blank" rel="noopener noreferrer">
                <img src="images/LinkedInLogo.png" alt="LinkedIn" className="social-icon" />
              </a>
              <div className="link-text">LinkedIn</div>
            </div>
          </div>
          <div className="resume">
            <a href="https://drive.google.com/file/d/1Ck1y3kLJ-5QJVV4Z3tSz_Lkxvc4qfinO/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <img src="images/PDF_file.png" alt="Resume" className="resume-icon" />
              <div className="link-text">Curriculum Vitae</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
