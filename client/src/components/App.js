import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const ItemNew = () => <h2>ItemNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  // return <div>Hi There!</div>;
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/items" component={Dashboard} />
          <Route path="/items/new" component={ItemNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
