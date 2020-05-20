import { getAllData } from '../services';
import { getQuestions } from './questions';
import { getUsers } from './users';

export function handleInitialData() {
  return dispatch => {
    return getAllData()
      .then(({ users, questions }) => {
        dispatch(getQuestions(questions));
        dispatch(getUsers(users));
    });
  };
}
