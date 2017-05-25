import axios from 'axios';
import { ADD_WIN } from './index';

import {getPlayerLeaderboard, getTeamLeaderboard} from './getLeaderboards';

export function addWin(name, wins) {
    return(dispatch, getState) => {
        const request = axios.post('http://localhost:3000/',
            {
                name: name,
                wins: wins
            });

        request.then((result) => {
            dispatch(getPlayerLeaderboard());
            dispatch(getTeamLeaderboard());
        }, (err) => {

        })
    }
}
