import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Toolbar from './toolbar';
import Leaderboard from './leaderboard';
import AddTeam from './add_team';
import AddPlayer from './add_player';

export default class App extends Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <BrowserRouter>
          <Switch>
            <Route path="/addTeam" component={AddTeam} />
            <Route path="/addPlayer" component={AddPlayer} />
            <Route path="/" component={Leaderboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
