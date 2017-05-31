import { GET_TEAM_LEADERBOARD, SEARCH_TEXT } from '../actions/index';

const INITIAL_STATE = {
    teamSearchText: '',
    teamLeaderboard: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case `${GET_TEAM_LEADERBOARD}_FULFILLED`:
            return {...state, teamLeaderboard: action.payload.data};
            break;
        case SEARCH_TEXT:
            return {...state, teamSearchText: action.payload};
            break;
        default:
            return state;
    }
}
