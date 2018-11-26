import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="ui message">
      <h1 className="ui header">Welcome to NoteHappy</h1>
      <p>
        Here you will find nothing more than a simple application to hold some
        simple notes. Have fun!
      </p>

      <p>:Davey</p>
      <Link className="ui button blue" to="#" role="button">
        Get started
      </Link>
    </div>
  );
};

export default Landing;
