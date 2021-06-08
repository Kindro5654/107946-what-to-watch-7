import React from 'react';
import StartScreen from '../start-screen/start-scren';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <StartScreen name={props.name} genre={props.genre} year={props.year} />
  );
}
App.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};
export default App;
