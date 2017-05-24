import { GET_PLAYER_LEADERBOARD } from '../actions/index';

const INITIAL_STATE = [
    { name: "Hatian", wins: 8},
    { name: "Obi-Wan", wins: 4},
    { name: "Lefty", wins: 12}
];

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload);
    switch(action.type) {
        case GET_PLAYER_LEADERBOARD:
            return [...state, action.payload.data];
        default:
            return state;
    }
}
