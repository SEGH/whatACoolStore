import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <Navbar brand={<Link to="/"><Icon>toy_store</Icon>WACS</Link>} alignLinks="right" className="navbar">
            <Link to="/" className="snipcart-checkout snipcart-summary"><Icon>shopping_cart</Icon><span className="snipcart-total-price">$0.00</span></Link>
        </Navbar>
    )
}