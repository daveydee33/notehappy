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
          <ul className="navbar-nav ml-auto">
            {/* Register */}
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Register
              </Link>
            </li>
            {/* Login */}
            <li className="nav-item">
              <a className="nav-link" href="/auth/google">
                Login
              </a>
            </li>
          </ul>
        );
      default:
        // the user is logged in
        return (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="navbar-text text-dark">
                {this.props.auth.name}
              </span>
            </li>
            {/* Logout */}
            <li className="nav-item">
              <a className="nav-link" href="/api/logout">
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          {/* If user logged in, take them to /items.  Otherwise, take them to '/' */}
          <Link to={this.props.auth ? '/items' : '/'} className="navbar-brand">
            NoteHappy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              {/* Collections */}
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Dashboard
                </Link>
              </li>
            </ul>

            {this.renderContent()}
          </div>
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
