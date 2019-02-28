import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: postsReducer ,
    users: userReducer

});