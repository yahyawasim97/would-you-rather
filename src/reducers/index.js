import { combineReducers } from 'redux';
import auth from './auth';
import questions from './questions';
import users from './users';


export default combineReducers({
  auth,
  questions,
  users
});