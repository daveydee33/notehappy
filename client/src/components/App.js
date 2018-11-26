import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // ie,  ../actions/index.js.  Assign all of the actions to this 'actions' object.

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ItemNew from './items/ItemNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="ui container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/items" component={Dashboard} />
            <Route path="/items/new" component={ItemNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions,
)(App); // now all of the action creators (eg, fetchUser) are passed in as props to this `App` component.
