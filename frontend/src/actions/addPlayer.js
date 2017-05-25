import axios from 'axios';

import {ADD_PLAYER} from './index';

export function addPlayer(values){
    const request = axios.get('http://localhost:3000//createSingleUser');

    return {
        type: ADD_PLAYER,
        payload: request
    }
}