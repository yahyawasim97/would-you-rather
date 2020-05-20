import { saveQuestion } from '../services';
import { addUserQuestion } from '../actions/users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

const appendNewQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const addQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question).then((response) => {
      dispatch(appendNewQuestion(response));
      dispatch(addUserQuestion(response));
    });
  };
};

export const addQuestionAnswer = (authUser, qid, answer) => {
  return {
    type: ADD_QUESTION_ANSWER,
    authUser,
    qid,
    answer,
  };
};
