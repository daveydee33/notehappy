import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // the reduxForm helper to allow the redux form to communicate with the redux store.  Works similar to the “connect” helper function.

class ItemForm extends Component {
  renderFormFields() {
    return (
      <div className="form-group">
        <div>
          <label htmlFor="title">Title</label>

          <Field
            label="Title"
            name="title"
            component="input"
            id="title"
            placeholder="title"
            type="text"
            className="form-control form-control-lg"
          />
        </div>

        <div>
          <label htmlFor="body">Body</label>

          <Field
            label="Body"
            name="body"
            component="textarea"
            id="body"
            placeholder="body"
            type="text"
            className="form-control form-control-lg"
          />
        </div>

        <div>
          <label htmlFor="tags">Tags</label>

          <Field
            label="Tags"
            name="tags"
            component="input"
            id="tags"
            placeholder="tags"
            type="text"
            className="form-control form-control-lg"
          />
        </div>
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

export default reduxForm({
  form: 'itemForm',
})(ItemForm);
