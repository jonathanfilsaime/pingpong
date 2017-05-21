import { combineReducers } from 'redux';

import teamLeaderboardReducer from '../reducers/team_leaderboard_reducer';

const rootReducer = combineReducers({
  teamLeaderboard: teamLeaderboardReducer
});

export default rootReducer;
