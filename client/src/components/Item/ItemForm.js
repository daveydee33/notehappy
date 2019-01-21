import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // the reduxForm helper to allow the redux form to communicate with the redux store.  Works similar to the “connect” helper function.
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import validateTags from '../../utils/validateTags';
import { withRouter } from 'react-router-dom';
import { addItem } from '../../actions';

class ItemForm extends Component {
  onSubmit = formValues => {
    this.props.addItem(formValues, this.props.history);
  };

  renderFormFields() {
    return (
      <div className="field">
        <Field
          component={TextFieldGroup}
          name="title"
          placeholder="Title"
          // info="title or details is required"
        />

        <Field
          component={TextAreaFieldGroup}
          name="body"
          placeholder="Details"
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
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error warning"
        >
          {this.renderFormFields()}
          <button type="submit" className="ui button primary">
            Add
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
    errors.tags = validateTags(values.tags);
  }

  if (!values.title && !values.body) {
    errors.title = 'Title or Description is required.';
    errors.body = 'Title or Description is required.';
  }

  return errors;
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (values, history) => {
      dispatch(addItem(values, history));
    },
  };
};

ItemForm = connect(
  null,
  mapDispatchToProps,
)(ItemForm);

export default reduxForm({
  form: 'itemForm',
  validate,
})(withRouter(ItemForm));
