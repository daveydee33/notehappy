import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // the reduxForm helper to allow the redux form to communicate with the redux store.  Works similar to the “connect” helper function.
import ItemFormField from './ItemFormField';

class ItemForm extends Component {
  renderFormFields() {
    return (
      <div>
        <Field
          label="Title"
          type="text"
          name="title"
          component={ItemFormField}
        />
        <Field label="Body" type="text" name="body" component={ItemFormField} />
        <Field label="Tags" type="text" name="tags" component={ItemFormField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>ItemForm</h2>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFormFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'itemForm',
})(ItemForm);
