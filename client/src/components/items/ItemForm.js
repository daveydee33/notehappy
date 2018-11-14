import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // the reduxForm helper to allow the redux form to communicate with the redux store.  Works similar to the “connect” helper function.

class ItemForm extends Component {
  renderFormFields() {
    return (
      <div>
        <div className="form-group">
          {/* <label htmlFor="title">Title</label> */}
          <Field
            label="Title"
            name="title"
            component="input"
            id="title"
            placeholder="Title"
            type="text"
            className="form-control form-control-lg"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="body">Body</label> */}
          <Field
            label="Body"
            name="body"
            component="textarea"
            id="body"
            placeholder="Body"
            type="text"
            className="form-control form-control-lg"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="tags">Tags</label> */}
          <Field
            label="Tags"
            name="tags"
            component="input"
            id="tags"
            placeholder="Tags"
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
