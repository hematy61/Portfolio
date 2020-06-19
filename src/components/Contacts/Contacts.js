import React from "react";
import {
  contacts_container,
  twitter_logo,
  social_logo,
  github_logo,
  stackOverflow_logo,
  linkedin_logo,
  Email_icon,
  resume,
} from "../../styles/components/Contacts/Contacts.scss";
import TwitterLogo from "./TwitterSVGIcon";
import StackOverflowSVGIcon from "./StackoverflowSVGIcon";
import GithubSVGIcon from "../Skills/GithubSVGIcon";
import LinkedinSVGIcon from "./LinkedinSVGIcon";
import EmailSVGIcon from "./EmailSVGIcon";
import Resume from "./resume.pdf";
import ResumeSVGIcon from "./resumeSVGIcon";

const Contacts = () => (
  <section id="contact" className={contacts_container}>
    <div className={social_logo}>
      <a href="https://twitter.com/hemati61" target="_blank">
        <TwitterLogo className={twitter_logo} />
      </a>
    </div>
    <div className={social_logo}>
      <a href="https://github.com/hematy61" target="_blank">
        <GithubSVGIcon className={github_logo} />
      </a>
    </div>
    <div className={social_logo}>
      <a
        href="https://stackoverflow.com/users/7274342/arashk?tab=profile"
        target="_blank"
      >
        <StackOverflowSVGIcon className={stackOverflow_logo} />
      </a>
    </div>
    <div className={social_logo}>
      <a href="https://www.linkedin.com/in/mohammad-hemati/" target="_blank">
        <LinkedinSVGIcon className={linkedin_logo} />
      </a>
    </div>
    <div className={social_logo}>
      <a href="mailto:hemati61@outlook.com">
        <EmailSVGIcon className={Email_icon} />
      </a>
    </div>
    <div className={resume}>
      <a href={Resume} target="_blank">
        <h2>Download my Resume</h2>
        <ResumeSVGIcon className={Email_icon} />
      </a>
    </div>
  </section>
);

export default Contacts;
