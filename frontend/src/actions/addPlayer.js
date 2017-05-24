import axios from 'axios';

export function addPlayer(values){
    const request = axios.get(`localhost:3000/addPlayer/${values.player_name}`);

    return {
        type: '',
        payload: request
    }
}