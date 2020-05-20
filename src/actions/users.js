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
function addUserAnswer(auth, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    auth,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(auth, qid, answer) {
  return (dispatch) => {
    dispatch(addUserAnswer(auth, qid, answer));
    dispatch(addQuestionAnswer(auth, qid, answer));

    return saveQuestionAnswer(auth, qid, answer).catch((e) => {
      console.log(e);
    });
  };
}
