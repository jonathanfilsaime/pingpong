import axios from 'axios';
import { ADD_WIN } from './index';

import {getPlayerLeaderboard, getTeamLeaderboard} from './getLeaderboards';

//TODO add redux thunk
export function addWin() {
    return(dispatch, getState) => {
        const request = axios.get(`http://localhost:3000/`);

        request.then((result) => {
            dispatch(getPlayerLeaderboard());
            dispatch(getTeamLeaderboard());
        }, (err) => {

        })
    }
}
