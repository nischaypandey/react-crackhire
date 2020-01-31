import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import jobSeekerReducers from './reducers/jobSeekerReducer';
import generalReducer from './reducers/generalReducer';

const store = createStore(combineReducers({jobSeekerReducers, general: generalReducer}), devToolsEnhancer());
                          
export default store;
