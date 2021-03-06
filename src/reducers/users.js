import {
  GET_USERS,
  ADD_USER_QUESTION,
  ADD_USER_ANSWER,
} from '../actions/users';

const users = (state = null, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_USER_QUESTION:
      const { author, id } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };

    case ADD_USER_ANSWER:
      const { auth, qid, answer } = action;
      return {
        ...state,
        [auth]: {
          ...state[auth],
          answers: {
            ...state[auth].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;
