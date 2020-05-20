import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import AppRouter from './router';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
