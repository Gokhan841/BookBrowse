import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav >
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/categories" >Categories</NavLink></li>
                <li><NavLink to="/add-book" >Add Book</NavLink></li>
                <li><NavLink to="/list-books" >List Books</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar