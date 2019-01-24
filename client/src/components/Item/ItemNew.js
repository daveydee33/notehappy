import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import ItemForm from './ItemForm';

class ItemNew extends Component {
  onSubmit = formValues => {
    this.props.addItem(formValues);
  };

  render() {
    return (
      <div>
        <h1>ItemNew</h1>
        <ItemForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addItem },
)(ItemNew);
