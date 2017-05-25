import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Toolbar from './toolbar';
import Banner from './banner';
import Leaderboard from '../containers/leaderboard';
import AddTeam from './add_team';
import AddPlayer from './add_player';

// Reset all default styles
import '../../style/reset.css';

import { getPlayerLeaderboard, getTeamLeaderboard } from '../actions/getLeaderboards';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <div className="app">
                <Toolbar/>
                <Banner />
                <Switch>
                    <Route path="/addPlayer" component={AddPlayer} onEnter={getPlayerLeaderboard()}/>
                    <Route path="/addTeam" component={AddTeam} />
                    <Route path="/" component={Leaderboard} />
                </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}
