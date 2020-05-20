import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import './App.css';
import DefaultLayout from './components/DefaultLayout';
import Login from './pages/Login';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import CreateQuestion from './pages/CreateQuestion';
import LeaderBoard from './pages/LeaderBoard';
import InvalidPath from './pages/InvalidPath';
import QuestionCard from './pages/QuestionCard';
import Loader from './components/Loader';
import { Row } from 'reactstrap';

class AppRouter extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { auth, users } = this.props;
    return (
      <div className="App">
        {users ? auth === null ? (
          <Route render={() => <Login />} />
        ) : (
          <>
            <Nav />
            <DefaultLayout>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/add" component={CreateQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions/invalid" component={InvalidPath} />
                <Route path="/questions/:questionId" component={QuestionCard} />
                <Route component={InvalidPath} />
              </Switch>
            </DefaultLayout>
          </>
        ):<Row className="justify-content-center"><Loader/></Row>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    users:state.users
  };
}

export default connect(mapStateToProps, { handleInitialData })(AppRouter);
