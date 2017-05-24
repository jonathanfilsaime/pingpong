import axios from 'axios';

export function addTeam(values){
    const request = axios.get(`localhost:3000/addPlayer/${values.team_name}`);

    return {
        type: '',
        payload: request
    }
}