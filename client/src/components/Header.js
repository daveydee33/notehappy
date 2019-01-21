import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null: // we don't know yet if the user is logged in or not. TODO: Maybe put a spinner or disabled links instead of nothing?
        return;
      case false: // the user is not logged in
        return (
          <div className="right menu">
            <a className="item" href="/auth/google">
              Login
            </a>
          </div>
        );
      default:
        // the user is logged in
        return (
          <div className="right menu">
            <span className="item light">
              <b>{this.props.auth.name}</b>
            </span>
            {/* Logout */}
            <a className="item" href="/api/logout">
              Logout
            </a>
          </div>
        );
    }
  }

  render() {
    return (
      <nav className="ui fixed borderless huge menu">
        <div className="ui container grid">
          <div className="computer only row">
            {/* If user logged in, take them to /items.  Otherwise, take them to '/' */}
            <Link className="header item" to={this.props.auth ? '/' : '/'}>
              NoteHappy
            </Link>

            {/* Collections */}
            <Link className="item" to="/items">
              Dashboard
            </Link>
            <Link className="item" to="/items/new">
              Add Item
            </Link>

            {this.renderContent()}
          </div>
          <div className="tablet mobile only row" />
          {/* TODO: Add tablet responsive header items here... */}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Header);
