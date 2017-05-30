import axios from 'axios';
import { ADD_WIN } from './index';

import {getPlayerLeaderboard, getTeamLeaderboard} from './getLeaderboards';

export function addPlayerWin(name, wins) {
    console.log("Dispatching addPlayerWin action");
    return(dispatch, getState) => {
        const request = axios.post('http://localhost:3000/updateSingles',
            {
                name: name,
                wins: ++wins
            });

        request.then((result) => {
            dispatch(getPlayerLeaderboard());
        }, (err) => {

        })
    }
}

export function addTeamWin(name, wins) {
    console.log("Dispatching addTeamWin action");
    return(dispatch, getState) => {
        const request = axios.post('http://localhost:3000/updateDoubles',
            {
                name: name,
                wins: ++wins
            });

        request.then((result) => {
            dispatch(getTeamLeaderboard());
        }, (err) => {

        })
    }
}
