import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App name="The Grand Budapest Hotel" genre="Drama" year="2014" />
  </React.StrictMode>,
  document.getElementById('root'));
