import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Signup from './Signup/index.jsx';
import Profile from './Profile/index.jsx';
import Feed from './Feed/index.jsx';
import Login from './Login/index.jsx';



ReactDOM.render((
    <Router history={browserHistory}>
      
      <Route path="/signup" component={Signup}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path='/profile/:username' component={Profile}></Route>
      <Route path='/feed' component={Feed}></Route>
      
      
    </Router>
), document.getElementById('app'));
