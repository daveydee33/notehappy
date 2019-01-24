import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // ie,  ../actions/index.js.  Assign all of the actions to this 'actions' object.

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ItemNew from './Item/ItemNew';

import history from '../history';
// Using Router + history is an alternative way to just using the BrowserRouter option.

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <div className="ui container give-it-some-space-after-the-titlebar">
            <Route exact path="/" component={Landing} />
            <Route exact path="/items" component={Dashboard} />
            <Route path="/items/new" component={ItemNew} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions,
)(App); // now all of the action creators (eg, fetchUser) are passed in as props to this `App` component.
