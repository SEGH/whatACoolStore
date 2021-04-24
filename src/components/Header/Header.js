import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <Navbar brand={<Link to="/">What A Cool Store</Link>} alignLinks="right">
            <Link to="/" className="snipcart-checkout snipcart-summary"><span className="snipcart-total-price">$0.00</span></Link>
        </Navbar>
    )
}