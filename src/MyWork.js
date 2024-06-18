import React from 'react';

const projects = [
  { id: 1, title: 'Project 1', imgSrc: 'images/farmpad.png', link: 'https://jorge-farmpad.projets.p8.garage404.com/' },
  { id: 2, title: 'Project 2', imgSrc: 'images/ThePhiloQuizz.png', link: 'https://jorge-philo-quizzdef.projets.p8.garage404.com/' },
  { id: 3, title: 'Project 3', imgSrc: 'images/Clonestagram.png', link: 'https://jorge-clonestagram.projets.p8.garage404.com/' },
  { id: 4, title: 'Project 4', imgSrc: 'images/PokemonAutoFight.png', link: 'https://jorge-pokefight.projets.p8.garage404.com/' },
  { id: 5, title: 'Project 5', imgSrc: 'images/LuxuryServices.png', link: 'https://jorge-p8-luxury-services.projets.p8.garage404.com/' },
  { id: 6, title: 'Project 6', imgSrc: 'images/pcomposants.png', link: 'https://jorge-pcomposants.projets.p8.garage404.com/' },
  { id: 7, title: 'Project 7', imgSrc: 'images/Morpion.png', link: 'https://jorge-morpion.projets.p8.garage404.com/' },
  { id: 8, title: 'Project 8', imgSrc: 'images/MyWeatherApp.png', link: 'https://my-react-weather-app-five.vercel.app/' },
  { id: 9, title: 'Project 9', imgSrc: 'images/SuperMarioRPG.png', link: 'https://random-rumble-react.vercel.app/' },
  { id: 10, title: 'Project 10', imgSrc: 'images/AlpineCars.png', link: 'https://alpine-beta-murex.vercel.app/' },
];

function MyWork() {
  return (
    <div className="my-work">
      <h2>My Work</h2>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imgSrc} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;
