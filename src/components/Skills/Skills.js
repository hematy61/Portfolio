import React from 'react';
import { 
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
  bootstrap_small
} from "../../styles/components/Skills/Skills.scss";
import JavascriptIcon from './JavascriptSVGIcon';
import ReactIcon from './ReactSVGIcon';
import HtmlIcon from "./Html5SVGIcon";
import CSSIcon from "./CssSVGIcon";
import ReduxIcon from './ReduxSVGIcon';
import NpmIcon from './NpmSVGIcon';
import GitHubIcon from './GithubSVGIcon';
import WebpackIcon from './WebpackSVGIcon';
import BabelIcon from './BabelSVGIcon';
import GitIcon from './GitSVGIcon';
import YarnIcon from './YarnSVGIcon';
import SassSVGIcon from './SassSVGIcon';
import BootstrapSVGIcon from './BootstrapSVGIcon';
import BootstrapSVGIconMobile from './BootstrapSVGIconMobile';
import NodeIcon from './NodejsSVGIcon';
import ExpressIcon from "./ExpressSVGIcon";
import MongoDBIcon from "./MongodbSVGIcon";


const Skills = () => (
  <section id='skills' className={skills_container}>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <JavascriptIcon className={`${icon} ${javascript}`} />
        <h3>JavaScript, ES6</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <ReactIcon className={`${icon} ${react}`} />
        <h3>React, React-Router</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <ReduxIcon className={`${icon} ${redux}`} />
        <h3>Redux</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <HtmlIcon className={`${icon} ${html}`} />
        <h3>HTML</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <CSSIcon className={`${icon} ${css}`} />
        <h3>CSS</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <SassSVGIcon className={`${icon} ${sass}`} />
        <h3></h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <BootstrapSVGIcon className={`${icon} ${bootstrap_big}`} />
        <BootstrapSVGIconMobile className={`${icon} ${bootstrap} ${bootstrap_small}`}/>
        <h3>Bootstrap</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <NpmIcon className={`${icon} ${npm}`} />
        <h3>NPM</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <YarnIcon className={`${icon}`}/>
        <h3>Yarn</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <GitIcon className={`${icon} ${git}`} />
        <h3>Git</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <GitHubIcon className={`${icon} ${github}`} />
        <h3>GitHub</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <WebpackIcon className={`${icon} ${webpack}`} />
        <h3>Webpack</h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <BabelIcon className={`${icon} ${babel}`} />
        <h3></h3>
      </div>
    </div>

    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <NodeIcon className={`${icon}`} />
        <h3></h3>
      </div>
    </div>
    
    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <ExpressIcon className={`${icon}`} />
        <h3></h3>
      </div>
    </div>
    
    <div className={bouncing_jitter_fix} >
      <div className={card} >
        <MongoDBIcon className={`${icon}`} />
        <h3></h3>
      </div>
    </div>
    
  </section>
);

export default Skills;