import React from 'react';

const projects = [
  { id: 1, title: 'The FarmPad', imgSrc: 'images/farmpad.png', link: 'https://jorge-farmpad.projets.p8.garage404.com/', technologies: ['HTML', 'CSS', 'JavaScript'] },
  { id: 2, title: 'The Philo-Quiz', imgSrc: 'images/ThePhiloQuizz.png', link: 'https://jorge-philo-quizzdef.projets.p8.garage404.com/', technologies: ['HTML', 'CSS', 'PHP'] },
  { id: 3, title: 'Clonestagram', imgSrc: 'images/Clonestagram.png', link: 'https://jorge-clonestagram.projets.p8.garage404.com/', technologies: ['HTML', 'CSS', 'PHP'] },
  { id: 4, title: 'Pokemon AutoFight', imgSrc: 'images/PokemonAutoFight.png', link: 'https://jorge-pokefight.projets.p8.garage404.com/', technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'PHP'] },
  { id: 5, title: 'Luxury Services', imgSrc: 'images/LuxuryServices.png', link: 'https://jorge-p8-luxury-services.projets.p8.garage404.com/', technologies: ['Symfony', 'Twig', 'Materialize'] },
  { id: 6, title: 'PComposants', imgSrc: 'images/pcomposants.png', link: 'https://jorge-pcomposants.projets.p8.garage404.com/', technologies: ['PrestaShop'] },
  { id: 7, title: 'Morpion', imgSrc: 'images/Morpion.png', link: 'https://jorge-morpion.projets.p8.garage404.com/', technologies: ['HTML', 'CSS', 'React'] },
  { id: 8, title: 'My Weather App', imgSrc: 'images/MyWeatherApp.png', link: 'https://my-react-weather-app-five.vercel.app/', technologies: ['React', 'API Open-Weather'] },
  { id: 9, title: 'Super Mario RPG Battle Game', imgSrc: 'images/SuperMarioRPG.png', link: 'https://random-rumble-react.vercel.app/', technologies: ['React', 'Redux'] },
  { id: 10, title: 'Alpine Cars', imgSrc: 'images/AlpineCars.png', link: 'https://alpine-beta-murex.vercel.app/', technologies: ['React', 'Redux'] },
];

function MyWork() {
  // Invertimos el orden de los proyectos utilizando slice().reverse().map()
  const reversedProjects = projects.slice().reverse();

  return (
    <div className="my-work">
      <h2>My Work</h2>
      <div className="grid">
        {reversedProjects.map((project) => (
          <div key={project.id} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imgSrc} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
              </div>
            </a>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>Technologies: {project.technologies.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;
