import React from 'react';
import { Link } from 'react-router-dom';



export function NavBar () {
    
    return (
        <div className="main-navbar">
            <ul className="flex clean-list space-between">
                <li><Link to='/market'><p>Market</p></Link></li>
                <li><Link to='/userRegister'><p>Login</p></Link></li>
                <li><Link to='/dashboard'><p>My Store</p></Link></li>
            </ul>
        </div>
    );
}