import React from 'react';
import { 
  intro_wrapper, 
  intro, 
  intro_content, 
  intro_scroll, 
  overlay,
  fullscreen_background
} from '../../styles/components/Intro/Intro.scss';
import background from './background.png';
import goDown from "./down.svg";

const Intro = () => (
  <div>
    <section className={intro_wrapper} >
      <div className={intro}>
        <div className={intro_content}>
          <h3>
            <span>A persistent</span> <br/>
            <span>LEARNER </span><br/>
            <span>and a</span> <br/>
            <span>Web Developer </span><br/>
          </h3>
          <h2>Hi, I'm </h2>
          <h1>Mo Hemati</h1>
        </div>
        <div className={intro_scroll}>
          <a href="/#about-me">
            <img src={goDown} alt="go down to about me"/>
          </a>
        </div>
        <img src={background} className={fullscreen_background} alt="Mo Hemati background image"/>
      </div>
      <div className={overlay}></div>
    </section>
  </div>
);

export default Intro;