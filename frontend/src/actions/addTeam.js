import axios from 'axios';

import { ADD_TEAM } from './index';

export function addTeam(values){
    const request = axios.get('http://localhost:3000/createDoubleUser');

    return {
        type: ADD_TEAM,
        payload: request
    }
}