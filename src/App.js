import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Storefront from './pages/Storefront/Storefront';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {

  return (
    <Router>
      <Route exact path="/" component={Storefront} />
      <Route path="/:slug" component={ProductDetail} />
    </Router>
  );
}

export default App;
