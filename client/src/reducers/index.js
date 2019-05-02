import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';
import postReducer from './postReducer.js';

export default combineReducers({	
	user: userReducer,
	post: postReducer,
	errors: errorReducer
});
