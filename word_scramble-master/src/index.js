import React from 'react';
import ReactDOM from 'react-dom';
import {
 HashRouter as Router,
  Route,
  Switch
  
} from "react-router-dom";
import Game from './components/game';
import GameOver from './components/gameOver'
import Difficulty from './components/difficulty'
import * as serviceWorker from './serviceWorker';


const Routing = (
  <Router>
    <div id = 'routing-container'>
      <Switch>
      <Route path= '/' exact component={Difficulty}></Route>
      <Route path= '/Game' exact component={Game}></Route>
      <Route path= '/GameOver' exact component={GameOver}></Route>
      <Route path = '*' component = {()=>'404 NOT FOUND'}></Route>
      </Switch>
    </div>
  </Router>
)




ReactDOM.render(

  Routing,
  document.getElementById('root')
);



serviceWorker.unregister();
