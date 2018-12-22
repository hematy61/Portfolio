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
        He has developed a great interest in programing since the first days of university as he took a few mandatory courses in programing with C++ and MATLAB. 
        His passion guide him through an adventure for Android and iOS programing with Swift. 
        Finally he found web development is what he is looking for. 
        He never forgets the first <code><span>console</span><span>.log(</span>"Hello World!!!!"<span>)</span></code> and the excitement that took over him.
        
      </p>
      <p>
        As a self-taught developer, he has passed a great deal of challenges and still hungry to take more. 
        He would prefer to stay an all-time junior developer to be open on learning. 
      </p>
    </div>
  </section>
);

export default AboutMe;