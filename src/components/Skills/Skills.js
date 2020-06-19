import React from "react";
import {
  mongodb,
  skills_container,
  card,
  icon,
  javascript,
  react,
  html,
  css,
  redux,
  bootstrap,
  npm,
  git,
  github,
  webpack,
  babel,
  bouncing_jitter_fix,
  sass,
  bootstrap_big,
  bootstrap_small,
  skills_higher_container,
  mysql,
  express,
  node,
} from "../../styles/components/Skills/Skills.scss";
import JavascriptIcon from "./JavascriptSVGIcon";
import ReactIcon from "./ReactSVGIcon";
import HtmlIcon from "./Html5SVGIcon";
import CSSIcon from "./CssSVGIcon";
import ReduxIcon from "./ReduxSVGIcon";
import NpmIcon from "./NpmSVGIcon";
import GitHubIcon from "./GithubSVGIcon";
import WebpackIcon from "./WebpackSVGIcon";
import BabelIcon from "./BabelSVGIcon";
import GitIcon from "./GitSVGIcon";
import YarnIcon from "./YarnSVGIcon";
import SassSVGIcon from "./SassSVGIcon";
import BootstrapSVGIcon from "./BootstrapSVGIcon";
import BootstrapSVGIconMobile from "./BootstrapSVGIconMobile";
import NodeIcon from "./NodejsSVGIcon";
import ExpressIcon from "./ExpressSVGIcon";
import MongoDBIcon from "./MongodbSVGIcon";
import PythonSVGIcon from "./PythonSVGIcon";
import MySqlSVGIcon from "./MySqlSVGIcon";
import ReactNativeSVGIcon from "./ReactNativeSVGIcon";
import TypeScriptSVGIcon from "./TypeScriptSVGIcon";
import AngularSVGIcon from "./AngularSVGIcon";
import SketchSVGIcon from "./SketchSVGIcon";

const Skills = () => (
  <section id="skills" className={skills_higher_container}>
    <div className={skills_container}>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/javascript"
        target="_blank"
      >
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <JavascriptIcon className={`${icon} ${javascript}`} />
            <h3>JavaScript, ES6</h3>
          </div>
        </div>
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
      >
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <HtmlIcon className={`${icon} ${html}`} />
            <h3>HTML</h3>
          </div>
        </div>
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <CSSIcon className={`${icon} ${css}`} />
            <h3>CSS</h3>
          </div>
        </div>
      </a>

      <a href="https://reactjs.org/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <ReactIcon className={`${icon} ${react}`} />
            <h3>React</h3>
          </div>
        </div>
      </a>

      <a href="https://www.typescriptlang.org/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <TypeScriptSVGIcon className={`${icon}`} />
            <h3>TypeScript</h3>
          </div>
        </div>
      </a>

      <a href="https://angular.io/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <AngularSVGIcon className={`${icon}`} />
            <h3>Angular</h3>
          </div>
        </div>
      </a>

      <a href="https://redux.js.org/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <ReduxIcon className={`${icon} ${redux}`} />
            <h3>Redux</h3>
          </div>
        </div>
      </a>

      <a href="https://sass-lang.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <SassSVGIcon className={`${icon} ${sass}`} />
            <h3></h3>
          </div>
        </div>
      </a>

      <a href="https://getbootstrap.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <BootstrapSVGIcon className={`${icon} ${bootstrap_big}`} />
            <BootstrapSVGIconMobile
              className={`${icon} ${bootstrap} ${bootstrap_small}`}
            />
            <h3>Bootstrap</h3>
          </div>
        </div>
      </a>

      <a href="https://www.npmjs.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <NpmIcon className={`${icon} ${npm}`} />
            <h3>NPM</h3>
          </div>
        </div>
      </a>

      <a href="https://yarnpkg.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <YarnIcon className={`${icon}`} />
            <h3>Yarn</h3>
          </div>
        </div>
      </a>

      <a href="https://webpack.js.org/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <WebpackIcon className={`${icon} ${webpack}`} />
            <h3>Webpack</h3>
          </div>
        </div>
      </a>

      <a href="https://babeljs.io/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <BabelIcon className={`${icon} ${babel}`} />
            <h3></h3>
          </div>
        </div>
      </a>

      <a href="https://nodejs.org/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <NodeIcon className={`${icon} ${node}`} />
            <h3></h3>
          </div>
        </div>
      </a>

      <a href="http://expressjs.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <ExpressIcon className={`${icon} ${express}`} />
            <h3></h3>
          </div>
        </div>
      </a>

      <a href="https://www.python.org/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <PythonSVGIcon className={`${icon}`} />
            <h3>Python</h3>
          </div>
        </div>
      </a>

      <a href="https://www.mongodb.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <MongoDBIcon className={`${icon} ${mongodb}`} />
            <h3></h3>
          </div>
        </div>
      </a>

      <a href="https://www.mysql.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <MySqlSVGIcon className={`${icon} ${mysql}`} />
            <h3></h3>
          </div>
        </div>
      </a>

      <a href="http://reactnative.dev/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <ReactNativeSVGIcon className={`${icon}`} />
            <h3>React Native</h3>
          </div>
        </div>
      </a>

      <a href="https://git-scm.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <GitIcon className={`${icon} ${git}`} />
            <h3>Git</h3>
          </div>
        </div>
      </a>

      <a href="https://github.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <GitHubIcon className={`${icon} ${github}`} />
            <h3>GitHub</h3>
          </div>
        </div>
      </a>

      <a href="https://www.sketch.com/" target="_blank">
        <div className={bouncing_jitter_fix}>
          <div className={card}>
            <SketchSVGIcon className={`${icon} `} />
            <h3>Sketch</h3>
          </div>
        </div>
      </a>
    </div>
  </section>
);

export default Skills;
