import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome</h1>
      <p className="lead">
        Here you will find nothing more than a simple application to hold some
        simple notes. Have fun!
      </p>

      <p>:Davey</p>
      <Link className="btn btn-primary btn-lg" to="#" role="button">
        Get started
      </Link>
    </div>
  );
};

export default Landing;
