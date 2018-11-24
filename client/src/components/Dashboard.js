import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './items/ItemList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ItemList />
      <Link to="/items/new" className="btn btn-info btn-md" role="button">
        Add New
      </Link>
    </div>
  );
};

export default Dashboard;
