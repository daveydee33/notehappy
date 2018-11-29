import React, { Component } from 'react';

class QuickAdd extends Component {
  state = {
    title: '',
    tags: '',
    body: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitQuickAdd(this.state);
  };

  render() {
    return (
      <div className="quick-add">
        <h2>QuickAdd</h2>
        <form onSubmit={this.handleSubmit} className="ui form">
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            name="tags"
            id="tags"
            value={this.state.tags}
            onChange={e => this.setState({ tags: e.target.value })}
          />
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          />
          <button type="submit" className="ui primary button">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default QuickAdd;
