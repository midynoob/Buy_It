import {
    LOGIN_USER,
    REGISTER_USER
} from '../actions/types';

export default function( state = {} , action){
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.playload}

        case REGISTER_USER:
            return {...state, loginSuccess: action.playload}
        default:
            return state;
    }
}