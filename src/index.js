import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
