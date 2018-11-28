import React from "react";
import { 
  header, 
  header_content,
  header_brand,
  header_brand_title,
  header_brand_subtitle,
  header_nav,
  menu_toggle_icon,
  menu_toggle,
  menu_screen_off
  } 
  from '../../styles/components/Header.scss';

const Header = () => (
  <div>
    <header className={header} >
      <div className={header_content}>
        <div className={header_brand}>
          <a href="/#root">
            <h1 className={header_brand_title}>Mo Hemati</h1>
            <h1 className={header_brand_subtitle}>Front-End Web Developer</h1>
          </a>
        </div>

        <input id={menu_toggle} type="checkbox"/>
        <label htmlFor={menu_toggle} className={menu_toggle_icon}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <label htmlFor={menu_toggle} className={menu_screen_off} ></label>

        <div className={header_nav}>
          <a href="#about-me">ABOUT ME</a>
          <a href="#skills">SKILLS</a>
          <a href="#education">EDUCATION</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </header>
  </div>
);



export default Header;