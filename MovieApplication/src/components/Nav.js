import React from 'react';
import {
    Link
} from "react-router-dom";
import UserIcon from '../images/user.svg';

const Nav = (props) => {
    return (
        <nav className="App__Nav">
            <ul className="App__NavList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/account"> My Account <img className="User__Icon" src={UserIcon} alt="user icon"/></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;