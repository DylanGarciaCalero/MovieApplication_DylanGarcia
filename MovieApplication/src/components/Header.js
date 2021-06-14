import React from 'react';
import Nav from './Nav';

const Header = (props) => {
    const url_base = "https://www.themoviedb.org";
    const svg_path = "/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"

    return (
        <div className="App__Header">
            <div className="App__Logo">
                <img src={`${url_base}${svg_path}`} alt="logo TMDB"/>
                <h1>{props.headerTitle}</h1>
            </div>
            <Nav />
        </div>
    );
};

export default Header;