import React, {Component} from "react";
import { 
  header, 
  header_content,
  header_brand,
  header_brand_title,
  header_brand_subtitle,
  header_nav,
  menu_toggle_icon,
  menu_toggle,
  menu_screen_off,
  activeLink
  } 
  from '../../styles/components/Header.scss';
import { Link } from 'react-scroll';


class Header extends Component {
  constructor(){
    super();
    this.state = {
      isActive: true
    }
  }
  
  handleClick = () => {
    document.getElementById(menu_toggle).checked = false;
  }
  
  render(){
    return (
      <div>
        <header className={header} >
          <div className={header_content}>
            <div className={header_brand}>
              <Link
                to="root"
                spy={true}
                smooth='easeOutCubic'
                duration={500}
              >
                <h1 className={header_brand_title}>Mo Hemati</h1>
                <h1 className={header_brand_subtitle}>Full Stack Web Developer</h1>
              </Link>
            </div>

            <input id={menu_toggle} type="checkbox"/>
            <label htmlFor={menu_toggle} className={menu_toggle_icon}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <label htmlFor={menu_toggle} className={menu_screen_off} ></label>

            <div className={header_nav} >
              <Link
                to="about-me" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
              ABOUT ME
              </Link>
              <Link
                to="skills" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
              SKILLS
              </Link>
              <Link
                to="education" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
              EDUCATION
              </Link>
              <Link
                to="projects" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
              PROJECTS
              </Link>
              <Link
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
              CONTACT
              </Link>
            </div>
          </div>
        </header>
      </div>
    )
  }
}




export default Header;