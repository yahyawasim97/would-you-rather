import { SET_AUTH } from '../actions/auth';

const auth=(state = null, action)=> {
  if (action.type === SET_AUTH) {
    return action.id;
  }
  return state;
}

export default auth;