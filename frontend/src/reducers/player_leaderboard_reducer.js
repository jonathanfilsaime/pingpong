import { GET_PLAYER_LEADERBOARD, SEARCH_TEXT } from '../actions/index';

const INITIAL_STATE = {
    playerSearchText: '',
    playerLeaderboard: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case `${GET_PLAYER_LEADERBOARD}_FULFILLED`:
            return {...state, playerLeaderboard: action.payload.data};
            break;
        case SEARCH_TEXT:
            return {...state, playerSearchText: action.payload};
            break;
        default:
            return state;
    }
}
