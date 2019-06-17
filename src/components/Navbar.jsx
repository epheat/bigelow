import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bigelow-navbar">
            <ul>
                <li>
                    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/events">Events</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;