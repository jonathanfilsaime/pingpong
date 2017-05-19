import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Toolbar from './toolbar';
import Leaderboard from './leaderboard';
import AddTeam from './add_team';
import AddPlayer from './add_player';

// Reset all default styles
import '../../style/reset.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
                <Toolbar/>
                <Switch>
                    <Route path="/addPlayer" component={AddPlayer} />
                    <Route path="/addTeam" component={AddTeam} />
                    <Route path="/" component={Leaderboard} />
                </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}
