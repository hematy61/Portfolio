import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/base/base.scss';
import Intro from './components/Intro/Intro';


const App = () => (
  <div>
    <Intro />
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste dicta cupiditate vitae accusamus sed laudantium reprehenderit similique, impedit unde, pariatur soluta. Laborum vel, omnis voluptate cum neque excepturi debitis.</h1>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);