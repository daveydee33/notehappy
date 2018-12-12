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
      <div className="quick-add ui segment">
        <h2>QuickAdd</h2>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="tags"
              id="tags"
              value={this.state.tags}
              onChange={e => this.setState({ tags: e.target.value })}
            />
          </div>
          <div className="field">
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={e => this.setState({ body: e.target.value })}
            />
          </div>

          <button type="submit" className="ui primary button">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default QuickAdd;
