import axios from 'axios';
import { ADD_WIN } from './index';

import {getPlayerLeaderboard, getTeamLeaderboard} from './getLeaderboards';

export function addWin(name, wins) {
    return(dispatch, getState) => {
        const request = axios.post('http://localhost:3000/update',
            {
                Name: name,
                Wins: wins++
            });

        request.then((result) => {
            dispatch(getPlayerLeaderboard());
            dispatch(getTeamLeaderboard());
        }, (err) => {

        })
    }
}
