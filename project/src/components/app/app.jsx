import React from 'react';
import StartScreen from '../start-screen/start-scren';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SignIn from '../sign-In/sign-in';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <StartScreen name={props.name} genre={props.genre} year={props.year} />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
App.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};
export default App;
