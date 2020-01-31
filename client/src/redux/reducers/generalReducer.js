import { ROLE_CHANGED, PROFILE_CHANGED, SIGN_IN, SIGN_OUT } from '../actions/actions';
import { combineReducers } from 'redux';

const initialRole = "jobseeker";

function roleReducer(state = initialRole, action){
    switch(action.type){
    case ROLE_CHANGED:
        return action.payload;
    default:
        return state;
    }
}

const initialProfile = {};

function profileReducer(state = initialProfile, action){
    switch(action.type){
    case PROFILE_CHANGED:
        return action.payload;
    case SIGN_IN:
        return action.payload;
    case SIGN_OUT:
        return {};
    default:
        return state;
    }
};

export { roleReducer, profileReducer };
export default combineReducers({ role: roleReducer });
