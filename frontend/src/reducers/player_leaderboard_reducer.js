import { GET_PLAYER_LEADERBOARD } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case `${GET_PLAYER_LEADERBOARD}_FULFILLED`:
            return action.payload.data;
            break;
        default:
            return state;
    }
}
