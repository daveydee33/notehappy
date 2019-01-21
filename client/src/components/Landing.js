import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="ui message">
      <h1 className="ui huge header">NoteHappy</h1>
      <p className="lead">
        Here you will find nothing more than a simple application to hold some
        simple notes. Have fun!
      </p>

      <p className="lead">:Davey</p>
      <Link className="ui button button primary huge" to="#" role="button">
        Get started
      </Link>
    </div>
  );
};

export default Landing;
