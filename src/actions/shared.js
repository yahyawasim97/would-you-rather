import { getUsers } from './users';
import { getQuestions } from './questions';
import { getAllData } from '../services';

export const handleInitialData = () => (dispatch) => {
  return getAllData().then(({ users, questions }) => {
    dispatch(getQuestions(questions));
    dispatch(getUsers(users));
  });
};
