import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // the reduxForm helper to allow the redux form to communicate with the redux store.  Works similar to the “connect” helper function.
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import validateTags from '../../utils/validateTags';

class ItemForm extends Component {
  doSomething(values) {
    console.log('boo', values);
  }

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
        <form onSubmit={this.props.handleSubmit(this.doSomething)}>
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

  // TODO: validate the Tags field.
  // Don't allow multiple values of the same, empty strings, like:  '  This,,,,,is ,is,some ,bad stuff,'.
  // This current validator will just show and error if there are invalid tags, but maybe I should just take in the tags and clean it up after submit to trip the white space, remove the empty tags, remove duplicates, special characters, trailing comma, etc. #TODO
  if (values.tags) {
    errors.tags = validateTags(values.tags || '');
  }

  if (!values.title) {
    errors.title = 'Required';
  }

  return errors;
}

export default reduxForm({
  form: 'itemForm',
  validate,
})(ItemForm);
