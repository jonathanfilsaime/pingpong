import axios from 'axios';

import { GET_TEAM_LEADERBOARD, GET_PLAYER_LEADERBOARD } from './index';

export function getTeamLeaderboard(values){
    const request = axios.get(`localhost:3000/`);

    return {
        type: GET_TEAM_LEADERBOARD,
        payload: request
    }
}

export function getPlayerLeaderboard(values){
    const request = axios.get(`localhost:3000/`);

    return {
        type: GET_PLAYER_LEADERBOARD,
        payload: request
    }
}