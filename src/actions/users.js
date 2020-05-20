import { saveQuestionAnswer } from '../services';
import { addQuestionAnswer } from '../actions/questions';

export const GET_USERS = 'GET_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function addUserQuestion({ id, author }) {
  return {
    type: ADD_USER_QUESTION,
    id,
    author,
  };
}
function addUserAnswer(authUser, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    authUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(addUserAnswer(authUser, qid, answer));
    dispatch(addQuestionAnswer(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
      console.log(e);
    });
  };
}
