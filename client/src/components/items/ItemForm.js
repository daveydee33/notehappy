import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // the reduxForm helper to allow the redux form to communicate with the redux store.  Works similar to the “connect” helper function.
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class ItemForm extends Component {
  renderFormFields() {
    return (
      <div>
        <Field
          component={TextFieldGroup}
          name="title"
          placeholder="Title"
          // info="required"
        />

        <Field
          component={TextAreaFieldGroup}
          name="body"
          placeholder="Detailed text"
        />

        <Field
          component={TextFieldGroup}
          name="tags"
          placeholder="Tags (optional)"
          info="comma-separated list of tags"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>ItemForm</h2>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFormFields()}
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title needed';
  }

  // if (!values.body) {
  //   errors.body = 'Body needed';
  // }

  return errors;
}

export default reduxForm({
  form: 'itemForm',
  validate,
})(ItemForm);
