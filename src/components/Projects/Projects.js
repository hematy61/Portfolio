import React from "react";
import { 
  projects_container,
  project_card_overlay,
  card,
  subtitle,
  card_image_container
} from "../../styles/components/Projects/Projects.scss";
const Projects = () => (
  <section id='projects' className={projects_container}>

    <div className={card}>
      <div className={card_image_container}>
        <div className={project_card_overlay}>
        </div>
        <img src={require('./portfolioWeb.gif')} alt="my portfolio website snapshot"/>
      </div>
      <div className={subtitle}>
        <h1>My Portfolio</h1>
        <p>React, Webpack 4, Babel, Autoprefixer, SASS, React Scroll</p>
        <p>A responsive design for desktop and mobile</p>
        <p>Mobile first design</p>
        <p>Using SVGs and code splitting</p>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a href="https://hematy61.github.io/react-tv-package-configurator/">
          <img src={require('./tv_package_configurator.gif')} alt="tv package configurator website snapshot" />
        </a>
      </div>
      <div className={subtitle}>
        <h1>TV Package Configurator</h1>
        <p>React ( Create-react-app )</p>
        <p>An internal app for call center representatives to be able to make changes to customers' TV package</p>
      </div>
    </div>

  </section>
);

export default Projects;