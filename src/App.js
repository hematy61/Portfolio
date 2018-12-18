import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/base/base.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';


const App = () => (
  <div>
    <Header />
    <Intro />
    <AboutMe />
    <Skills />
    <Education />
    <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste dicta cupiditate vitae accusamus sed laudantium reprehenderit similique, impedit unde, pariatur soluta. Laborum vel, omnis voluptate cum neque excepturi debitis.</h1>
    <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste dicta cupiditate vitae accusamus sed laudantium reprehenderit similique, impedit unde, pariatur soluta. Laborum vel, omnis voluptate cum neque excepturi debitis.</h1>
    <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste dicta cupiditate vitae accusamus sed laudantium reprehenderit similique, impedit unde, pariatur soluta. Laborum vel, omnis voluptate cum neque excepturi debitis.</h1>
    <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste dicta cupiditate vitae accusamus sed laudantium reprehenderit similique, impedit unde, pariatur soluta. Laborum vel, omnis voluptate cum neque excepturi debitis.</h1>
    <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste dicta cupiditate vitae accusamus sed laudantium reprehenderit similique, impedit unde, pariatur soluta. Laborum vel, omnis voluptate cum neque excepturi debitis.</h1>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);