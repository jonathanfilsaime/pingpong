import axios from 'axios';

import {ADD_PLAYER} from './index';

export function addPlayer(values){
    const request = axios.post('http://localhost:3000/createSingleUser',
        {
          name: values.player_name
        });

    return {
        type: ADD_PLAYER,
        payload: request
    }
}