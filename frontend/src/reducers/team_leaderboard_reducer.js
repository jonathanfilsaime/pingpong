import { GET_TEAM_LEADERBOARD } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_TEAM_LEADERBOARD:
            return [...state, action.payload];
        default:
            return state;
    }
}
