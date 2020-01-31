import { AD_APPLIED, AD_QUERIED, BAR_CHANGED, CATEGORY_CHANGED } from '../actions/actions';
import { combineReducers } from 'redux';

const initialStateJobSeeker = { // ajax call
    details: {
        name: "",
        email: "",
        experience: "",
        phone: "",
        skills: [],
        premiumPlans: []
    },
    appled: [],
    filters: {
        experience: [],
        skills: []
    }
};

function jobSeekerReducer(state = initialStateJobSeeker, action){
    switch(action.type){
    case AD_APPLIED:
        return Object.assign({}, initialStateJobSeeker, {applied: [...state.applied, action.appledJob]});
    case AD_QUERIED:
        // ajax call
        return Object.assign({}, initialStateJobSeeker, {results: /* result */ []});
    default:
        return state;
    }
}

const initialStateCategory = "all";

function categoryReducer(state = initialStateCategory, action){
    switch(action.type){
    case CATEGORY_CHANGED:
        return action.category;
    default:
        return state;
    }
}

const initialStateBar = {
    search: "",
    location: "",
    experience: "beginner",
};

function barReducer(state = initialStateBar, action){
    switch(action.type){
    case AD_QUERIED:
        return action.bar;
    default:
        return state;
    }
}

const initialStateAlert = false;

function alertReducer(state = initialStateAlert, action){
    switch(action.type){
    case AD_APPLIED:
        window.setTimeout(() => alertReducer(state, {type: AD_APPLIED}), 5000);
        return !state;
    default:
        return state;
    }
}

export {barReducer, jobSeekerReducer, categoryReducer, alertReducer};
export default combineReducers({bar: barReducer, jobSeeker: jobSeekerReducer, category: categoryReducer,
                                alert: alertReducer});
