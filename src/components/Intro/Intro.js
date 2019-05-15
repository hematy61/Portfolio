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
import DownSVGIcon from "./down";
import WaiveSVGIcon from "./waive";
import { Link } from "react-scroll";


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
          <Link
                to = "about-me"
                spy={true} 
                smooth={true} 
                duration={500}
              >
              <DownSVGIcon className={intro_scroll}/>
          </Link>
        </div>
        <img src={background} className={fullscreen_background} alt="Mo Hemati background image"/>
        <div style={{zIndex: '-10', position: 'relative', bottom: 0, width: '100vw', maxWidth: '1200px'}}>
          <WaiveSVGIcon />
        </div>
      </div>
      <div className={overlay}></div>
    </section>
  </div>
);

export default Intro;