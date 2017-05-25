import axios from 'axios';

import { ADD_TEAM } from './index';

export function addTeam(values){
    const request = axios.post('http://localhost:3000/createDoubleUser',
        {
        name: values.team_name
    });

    return {
        type: ADD_TEAM,
        payload: request
    }
}