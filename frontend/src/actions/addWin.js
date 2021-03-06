import axios from 'axios';

import {getPlayerLeaderboard, getTeamLeaderboard} from './getLeaderboards';

export function addPlayerWin(name, wins) {
    return(dispatch, getState) => {
        const request = axios.post('http://localhost:3000/updateSingles',
            {
                name: name,
                wins: wins + 1
            });

        request.then((result) => {
            dispatch(getPlayerLeaderboard());
        }, (err) => {

        })
    }
}

export function addTeamWin(name, wins) {
    return(dispatch, getState) => {
        const request = axios.post('http://localhost:3000/updateDoubles',
            {
                name: name,
                wins: wins + 1
            });

        request.then((result) => {
            dispatch(getTeamLeaderboard());
        }, (err) => {

        })
    }
}
