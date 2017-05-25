import { GET_PLAYER_LEADERBOARD } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PLAYER_LEADERBOARD + 'FULFILLED':
            return [...state, action.payload.data];
            break;
        case GET_PLAYER_LEADERBOARD + 'REJECTED':
            return [{name: "Couldn't retrieve data", wins: "-"}];
            break;
        default:
            return state;
    }
}
