import React from 'react';
import { intro, overlay } from '../../styles/components/Intro/Intro.scss'

const Intro = () => (
  <div>
    <section className={intro} >
      <div>
        <h1>
          <span>A persistent </span>
          <span>LEARNER </span>
          <span>and a </span>
          <span>Web Developer </span>
          <span>Hi, I'm </span>
          <span>Mo Hemati</span>
        </h1>
      </div>
      <div className={overlay}></div>
    </section>
  </div>
);

export default Intro;