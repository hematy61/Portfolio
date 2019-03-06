import React from 'react';
import { 
  about_me_container,
  content_frame 
} from "../../styles/components/AboutMe/AboutMe.scss";

const AboutMe = () => (
  <section id="about-me" className={about_me_container} >
    <div className={content_frame} >
      <p>
        Mo is a graduate in Electronic Engineering and awarded the top student with the grade 18.5 / 20. 
        He has developed a great interest in programing since the first days of university as he took a few mandatory courses in programing with C++ and Image Processing with MATLAB. 
        His passion led him into an adventure for Android and iOS programing. 
        Finally he found out web development is what he is looking for. 
        He never forgets the first <code><span>console</span><span>.log(</span>"Hello World!!!!"<span>)</span></code> and the excitement that took over him.
        
      </p>
      <p>
        As a self-taught developer, he has passed a great deal of challenges and still hungry to learn more. 
        He is dedicated to learning as it is a must to be a web developer.
      </p>
    </div>
  </section>
);

export default AboutMe;