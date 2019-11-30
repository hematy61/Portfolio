import React from "react";
import {
  projects_container,
  project_card_overlay,
  card,
  subtitle,
  card_image_container
} from "../../styles/components/Projects/Projects.scss";
const Projects = () => (
  <section id="projects" className={projects_container}>
    {/* ---------------------------------------------------------------
                          Portfolio
    ---------------------------------------------------------------*/}
    <div className={card}>
      <div className={card_image_container}>
        <div className={project_card_overlay}></div>
        <a href="https://github.com/hematy61/Portfolio" target="_blank">
          <img
            src={require("./portfolioWeb.gif")}
            alt="my portfolio website snapshot"
          />
        </a>
      </div>
      <div className={subtitle}>
        <h1>My Portfolio</h1>
        <h4>
          <a href="https://github.com/hematy61/Portfolio" target="_blank">
            Source Code
          </a>
        </h4>
        <hr />
        <h4>Tech Stacks:</h4>
        <blockquote>
          React, Webpack 4, Babel, Autoprefixer, SASS, React Scroll, React
          Loadable
        </blockquote>
        <hr />
        <h4>More Details:</h4>
        <ul>
          <li>A responsive design for desktop and mobile</li>
          <li>Mobile first design</li>
          <li>Using SVGs</li>
          <li>
            Using
            <a
              href="https://github.com/jamiebuilds/react-loadable"
              target="_blank"
            >
              {" "}
              react-loadable
            </a>{" "}
            to split final Webpack production bundle to small chunks of code
          </li>
        </ul>
      </div>
    </div>

    {/* ---------------------------------------------------------------
                          FNFAO
    ---------------------------------------------------------------*/}
    <div className={card}>
      <div className={card_image_container}>
        <div className={project_card_overlay}></div>
        <a href="https://github.com/hematy61/Portfolio" target="_blank">
          <img
            src={require("./fnfao-screenshot.gif")}
            alt="FNFAO application snapshot"
          />
        </a>
      </div>
      <div className={subtitle}>
        <h1>FNFAO</h1>
        <hr />

        <p>
          The application was for{" "}
          <a href="https://firstnationsfamilyadvocate.com/">
            First Nations Family Advocate Office
          </a>{" "}
          and I managed a team of 3 developers remotely all around the world,
          with slack, Trello, WhatsApp, Telegram, Github, Gitlab, Zoom,{" "}
          <a href="https://jitsi.org">jitsi</a>.
        </p>
        <h4>Management Key Points:</h4>
        <ul>
          <li>Set up regular meetups</li>
          <li>
            Collaborate with team members to keep the project on scope, on time
            and within budget
          </li>
          <li>Monitor, track, and report on overall schedule of projects</li>
          <li>
            Delegate work to development team and provide guidance as needed
          </li>
          <li>
            Communicate, problem solve and collaborate with team about risks,
            issues and opportunities
          </li>
          <li>
            Perform accurate initial project set-up and tracking through project
            management tool
          </li>
          <li>
            Define coding, documenting, branching, merging strategies to have a
            consistent development environment
          </li>
        </ul>
        <hr />

        <h4>
          Unfortunately this is a private project and can't share the source
          code.
        </h4>
        <hr />

        <h4>Tech Stacks:</h4>
        <blockquote>
          Angular, TypeScript, Redux, Material Design, NodeJS, Express, MongoDB,
          Mongoose
        </blockquote>
        <hr />

        <h4>More Details:</h4>
        <ul>
          <li>Responsive design</li>
          <li>Securing the API against XSS, CSRF, Scripting attacks and</li>
          <li>Hashing sensitive data with bcrypt</li>
          <li>RUsing SVGs to reduce requests to server</li>
        </ul>
      </div>
    </div>

    {/* ---------------------------------------------------------------
                          Weather App
    ---------------------------------------------------------------*/}
    <div className={card}>
      <div className={card_image_container}>
        <a
          href="https://github.com/hematy61/weather-node-web-server-app"
          target="_blank"
        >
          <img
            src={require("./weather-app.gif")}
            alt="weather node and express app snapshot"
          />
        </a>
      </div>
      <div className={subtitle}>
        <h1>Weather App</h1>
        <h4>
          <a
            href="https://github.com/hematy61/weather-node-web-server-app"
            target="_blank"
          >
            Source Code
          </a>
        </h4>
        <hr />
        <h4>
          <a
            href="https://mhemati-weather-node-app.herokuapp.com"
            target="_blank"
          >
            Live Demo
          </a>
        </h4>
        <hr />
        <h4>Tech Stacks:</h4>
        <blockquote>
          NodeJS, Express, handlebars, request, hbs, env-cmd, Heroku
        </blockquote>
        <hr />
        <h4>More Details:</h4>
        <ul>
          <li>
            A Node and Express app which pulls data from Mapbox nad Darksky APIs
            and render the templates with fetched data.
          </li>
          <li>HTTP requests to Mapbox API and grab longitude and latitude</li>
          <li>
            HTTP requests to Darksky API and grab weather for the location
            received through MApbox API
          </li>
          <li>Fetch data from back end and represent them to user</li>
          <li>
            Back-end HTTP requests are deployed through 'request' npm package
          </li>
          <li>
            Front-end HTTP requests are deployed through Fetch API and Promises
          </li>
          <li>Deployed on Heroku</li>
        </ul>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a
          href="https://hematy61.github.io/react-tv-package-configurator/"
          target="_blank"
        >
          <img
            src={require("./tv_package_configurator.gif")}
            alt="tv package configurator website snapshot"
          />
        </a>
      </div>
      <div className={subtitle}>
        <h1>TV Package Configurator</h1>
        <h4>
          <a
            href="https://github.com/hematy61/react-tv-package-configurator"
            target="_blank"
          >
            Checkout GitHub Repository
          </a>
        </h4>
        <h4>React ( Create-react-app )</h4>
        <p>
          An internal app for call center representatives to be able to make
          changes to customers' TV package
        </p>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a href="https://github.com/hematy61/Notes-node-app" target="_blank">
          <img
            src={require("./note-node-app.png")}
            alt="note node app command line snapshot"
          />
        </a>
      </div>
      <div className={subtitle}>
        <h1>Note Node App</h1>
        <h4>
          <a href="https://github.com/hematy61/Notes-node-app" target="_blank">
            Checkout GitHub Repository
          </a>
        </h4>
        <h4>Node.js, Yargs, Chalk</h4>
        <p>A simple NodeJS Note app which is taking inputs from command line</p>
        <p>Using Yargs and Chalk</p>
        <p>Can take notes from command line and save them as a json file</p>
        <p>Edit, list all notes or find a specific note and remove a note</p>
      </div>
    </div>

    <div className={card}>
      <div className={card_image_container}>
        <a
          href="https://github.com/hematy61/MarketCircle_MockUp"
          target="_blank"
        >
          <img
            src={require("./MarketCircle_MockUp.png")}
            alt="Market Circle Mockup snapshot"
          />
        </a>
      </div>
      <div className={subtitle}>
        <h1>One page Responsive Design</h1>
        <h4>
          <a
            href="https://github.com/hematy61/MarketCircle_MockUp"
            target="_blank"
          >
            Checkout GitHub Repository
          </a>
        </h4>
        <h4>
          <a href="./MarketCircle_MockUp/index.html" target="_blank">
            Click here to see it in action
          </a>
        </h4>
        <h4>
          React, react scroll, normalize, Babel, Autoprefixer, SASS, Babel
          plugins, Webpack, Webpack dev server
        </h4>
        <p>
          This is a responsive page based on a mock up that I have done for
          Market Circle co.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
