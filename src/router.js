import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import Dashboard from './pages/Dashboard';

const AppRouter =()=>{
  return(
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default AppRouter;