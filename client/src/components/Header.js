import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null: // we don't know yet if the user is logged in or not
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
            <span className="item disabled">{this.props.auth.name}</span>
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
      <nav className="ui  menu navbar large">
        <div className="ui container">
          {/* If user logged in, take them to /items.  Otherwise, take them to '/' */}
          <Link to={this.props.auth ? '/' : '/'} className="header item">
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
