import React from "react";
import { 
  education_container,
  education_card,
  icon,
  university,
  content,
  card_container
} from "../../styles/components/Education/Education.scss";
import FreeCodeCampIcon from "./FreeCodeCampSVGIcon";
import UdemyIcon from "./UdemySVGIcon";
import LyndaIcon from "./LyndaSVGIcon";

const Education = () => (
  <section id='education' className={education_container}>
    
    <div className={card_container}>
      <div className={`${education_card} ${university}`}>
        <h1>B.Sc. in Electrical and Electronic Engineering</h1>
        <h3>2009 – 2011</h3>
        <h5>Azad University</h5>
        <p>Shiraz, Iran</p>
      </div>
    </div>

    <div className={card_container}>
      <div className={`${education_card} ${content}`}>
        <FreeCodeCampIcon className={icon} />
        <h1>Responsive Web Design Certification</h1>
        <p>In Progress</p>
      </div>
    </div>

    <div className={card_container}>
      <div className={`${education_card} ${content}`}>
        <FreeCodeCampIcon className={icon} />
        <h1>Javascript Algorithms And Data Structures Certification</h1>
        <p>In Progress</p>
      </div>
    </div>

    <div className={card_container}> 
      <div className={`${education_card} ${content}`}>
        <FreeCodeCampIcon className={icon}/>
        <h1>Responsive Web Design Certification</h1>
        <p>Finished</p>
      </div>
    </div>

    <div className={card_container}>
      <div className={`${education_card} ${content}`}>
        <UdemyIcon className={icon} />
        <h1>The Complete Web Developer in 2019: Zero to Mastery</h1>
        <p>Finished</p>
        <p>By: Andrei Neagoie</p>
      </div>
    </div>

    <div className={card_container}>
      <div className={`${education_card} ${content}`}>
        <UdemyIcon className={icon} />
        <h1>The Complete React Web Developer Course (with Redux)</h1>
        <p>Finished</p>
        <p>By: Andrew Mead</p>
      </div>
    </div>

    <div className={card_container}>
      <div className={`${education_card} ${content}`}>
        <UdemyIcon className={icon} />
        <h1>The Web Developer Bootcamp</h1>
        <p>Finished</p>
        <p>By: Colt Steele</p>
      </div>
    </div>

    <div className={card_container}>
      <div className={`${education_card} ${content}`}>
        <LyndaIcon className={icon} />
        <h1>CSS Essential Training 1 & 2 & 3</h1>
        <p>Finished</p>
        <p>By: Christina Truong</p>
      </div>
    </div>

  </section>
);

export default Education;