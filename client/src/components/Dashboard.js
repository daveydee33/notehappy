import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemList from './Item/ItemList';
import QuickAdd from './QuickAdd';
import { withRouter } from 'react-router-dom';
import { addItem } from '../actions';

class Dashboard extends Component {
  onSubmitQuickAdd = values => {
    this.props.addItem(values, this.props.history);
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <QuickAdd onSubmitQuickAdd={this.onSubmitQuickAdd} />
        <ItemList />
        <Link to="/items/new" className="ui primary button" role="button">
          Add New
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (values, history) => {
      dispatch(addItem(values, history));
    },
  };
};

Dashboard = connect(
  null,
  mapDispatchToProps,
)(Dashboard);

export default withRouter(Dashboard);
