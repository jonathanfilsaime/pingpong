import { combineReducers } from 'redux';

import teamLeaderboardReducer from '../reducers/team_leaderboard_reducer';
import playerLeaderboardReducer from '../reducers/player_leaderboard_reducer';

const rootReducer = combineReducers({
  teamLeaderboard: teamLeaderboardReducer,
  playerLeaderboard: playerLeaderboardReducer
});

export default rootReducer;
