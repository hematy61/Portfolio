import React from 'react';
import ReactDOM from 'react-dom';
import loadable from 'react-loadable';
import 'normalize.css';
import './styles/base/base.scss';

const LoadableHeader = loadable({
  loader: () => import('./components/Header/Header'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
});

const LoadableIntro = loadable({
  loader: () => import('./components/Intro/Intro'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
})

const LoadableAboutMe = loadable({
  loader: () => import('./components/AboutMe/AboutMe'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
})

const LoadableSkills = loadable({
  loader: () => import('./components/Skills/Skills'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
})

const LoadableEducation = loadable({
  loader: () => import('./components/Education/Education'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
})

const LoadableProjects = loadable({
  loader: () => import('./components/Projects/Projects'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
})

const LoadableContacts = loadable({
  loader: () => import('./components/Contacts/Contacts'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div></div>;
    }
  }
})

const App = () => (
  <div>
    <LoadableHeader />
    <LoadableIntro />
    <LoadableAboutMe />
    <LoadableSkills />
    <LoadableEducation />
    <LoadableProjects />
    <LoadableContacts />
  </div>
);

window.addEventListener('load', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}, false);


