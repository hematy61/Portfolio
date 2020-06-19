import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import loadable from "react-loadable";
import "normalize.css";
import "./styles/base/base.scss";

// using react-loadable to split the components to small chunks. Header component is going to be imported
// asynchronously with loadable library
import LoadableHeader from "./components/Header/Header";
import LoadableIntro from "./components/Intro/Intro";

const LoadableAboutMe = loadable({
  loader: () => import("./components/AboutMe/AboutMe"),
  loading: function Loading(props) {
    if (props.error) {
      return (
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  },
});

const LoadableSkills = loadable({
  loader: () => import("./components/Skills/Skills"),
  loading: function Loading(props) {
    if (props.error) {
      return (
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  },
});

const LoadableEducation = loadable({
  loader: () => import("./components/Education/Education"),
  loading: function Loading(props) {
    if (props.error) {
      return (
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  },
});

const LoadableProjects = loadable({
  loader: () => import("./components/Projects/Projects"),
  loading: function Loading(props) {
    if (props.error) {
      return (
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  },
});

const LoadableContacts = loadable({
  loader: () => import("./components/Contacts/Contacts"),
  loading: function Loading(props) {
    if (props.error) {
      return (
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  },
});

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
          <LoadableHeader />
          <LoadableIntro />
        </div>
        {this.state.loaded && (
          <div>
            <LoadableAboutMe />
            <LoadableSkills />
            <LoadableEducation />
            <LoadableProjects />
            <LoadableContacts />
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
