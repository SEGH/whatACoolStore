import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Storefront from './pages/Storefront/Storefront';

function App() {

  return (
    <Router>
      <Route exact path="/" component={Storefront} />
    </Router>
  );
}

export default App;
