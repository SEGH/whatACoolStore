import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Storefront from './pages/Storefront/Storefront';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header';

function App() {

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Storefront} />
      <Route path="/:slug" component={ProductDetail} />
    </Router>
  );
}

export default App;
