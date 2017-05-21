import { GET_PLAYER_LEADERBOARD } from '../actions/index';

const INITIAL_STATE = [
    { name: "Hatian", wins: 8},
    { name: "Obi-Wan", wins: 4},
    { name: "Lefty", wins: 12}
];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PLAYER_LEADERBOARD:
            return [...state, action.payload];
        default:
            return state;
    }
}
