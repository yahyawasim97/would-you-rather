import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import AppRouter from './router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
