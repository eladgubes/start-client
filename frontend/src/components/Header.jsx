import React from 'react';
import { Link } from 'react-router-dom';


import { NavBar } from './NavBar'
import { SearchBar } from './SearchBar'


export function Header() {

    return (
        <div className="header flex space-between container">
            <div className="logo">
                <Link to='/'><h2>Mushhhh</h2></Link>
            </div>
            <SearchBar />
            <NavBar />
        </div>
    );
}