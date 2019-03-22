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
        <a href="https://github.com/hematy61/Portfolio" target='_blank' >
          <img src={require('./portfolioWeb.gif')} alt="my portfolio website snapshot"/>
        </a>
      </div>
      <div className={subtitle}>
        <h1>My Portfolio</h1>
        <h4>React, Webpack 4, Babel, Autoprefixer, SASS, React Scroll, React Loadable</h4>
        <p>A responsive design for desktop and mobile</p>
        <p>Mobile first design</p>
        <p>Using SVGs</p>
        <p>Using 
          <a 
            href="https://github.com/jamiebuilds/react-loadable" 
            target="_blank"
          > react-loadable
          </a> to split final Webpack production bundle to small chunks of code
        </p>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a href="https://hematy61.github.io/react-tv-package-configurator/" target='_blank' >
          <img src={require('./tv_package_configurator.gif')} alt="tv package configurator website snapshot" />
        </a>
      </div>
      <div className={subtitle}>
        <h1>TV Package Configurator</h1>
        <h4>React ( Create-react-app )</h4>
        <p>An internal app for call center representatives to be able to make changes to customers' TV package</p>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a href="https://github.com/hematy61/Notes-node-app" target='_blank' >
          <img src={require('./note-node-app.png')} alt="note node app command line snapshot" />
        </a>
      </div>
      <div className={subtitle}>
        <h1>Note Node App</h1>
        <h4>Node.js, Yargs, Chalk</h4>
        <p>A simple NodeJS Note app which is taking inputs from command line</p>
        <p>Using Yargs and Chalk</p>
        <p>Can take notes from command line and save them as a json file</p>
        <p>Edit, list all notes or find a specific note and remove a note</p>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a href="https://github.com/hematy61/weather-node-web-server-app" target='_blank' >
          <img src={require('./weather-app.png')} alt="weather node and express app snapshot" />
        </a>
      </div>
      <div className={subtitle}>
        <h1>Weather Node and Express App</h1>
        <h4><a href="https://mhemati-weather-node-app.herokuapp.com" target='_blank' >Click here to see it in action</a></h4>
        <h4>NodeJS, Express, handlebars, request, hbs, env-cmd</h4>
        <p>
          This is a weather app which is using Node and Express in back-end to pull data from 
          Mapbox nad Darksky APIs and serve the front-end pages.
        </p>
        <p>HTTP requests to Mapbox API and grab longitude and latitude</p>
        <p>HTTP requests to Darksky API and grab weather for the location received through MApbox API</p>
        <p>Fetch data from back end and represent them to user</p>
        <p>Back-end HTTP requests are deployed through 'request' npm package</p>
        <p>Front-end HTTP requests are deployed through Fetch API and Promises </p>
        <p>Deployed on Heroku</p>
      </div>
    </div>

  </section>
);

export default Projects;