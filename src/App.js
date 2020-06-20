import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/base/base.scss";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    const element = document.querySelectorAll("#introLoading img")[0];
    element.addEventListener("load", () => this.setState({ loaded: true }));
  }

  render() {
    return (
      <div>
        <div id="introLoading">
          <Header />
          <Intro />
        </div>
        {this.state.loaded && (
          <div>
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <Contacts />
          </div>
        )}
      </div>
    );
  }
}

window.addEventListener(
  "load",
  () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  },
  false
);
