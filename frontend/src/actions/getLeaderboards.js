import axios from 'axios';

import { GET_TEAM_LEADERBOARD, GET_PLAYER_LEADERBOARD, SEARCH_TEXT } from './index';

export function getTeamLeaderboard(){
    const request = axios.get('http://localhost:3000/readAllDoubles');

    return {
        type: GET_TEAM_LEADERBOARD,
        payload: request
    }
}

export function getPlayerLeaderboard(){
    const request = axios.get('http://localhost:3000/readAllSingles');

    return {
        type: GET_PLAYER_LEADERBOARD,
        payload: request
    }
}

export function onSearchTextChange(term){
    return {
        type: SEARCH_TEXT,
        payload: term
    }
}