import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default store;