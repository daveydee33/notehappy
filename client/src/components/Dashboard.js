import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/items/new" className="btn btn-info btn-md" role="button">
        Add New
      </Link>
    </div>
  );
};

export default Dashboard;
