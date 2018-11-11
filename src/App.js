import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/base/base.scss';
import Intro from './components/Intro/Intro';


const App = () => (
  <div>
    <Intro />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);