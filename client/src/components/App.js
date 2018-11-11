import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // ie,  ../actions/index.js.  Assign all of the actions to this 'actions' object.

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const ItemNew = () => <h2>ItemNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/items" component={Dashboard} />
            <Route path="/items/new" component={ItemNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App); // now all of the action creators (eg, fetchUser) are passed in as props to this `App` component.
