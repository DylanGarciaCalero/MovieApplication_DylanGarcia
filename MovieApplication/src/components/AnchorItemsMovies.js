import React from 'react';

import { HashLink as Link} from 'react-router-hash-link';

//SMOOTH SCROLLING WERKT NIET
import * as Scroll from 'react-scroll';

const AnchorItemsMovies = (props) => {

    // let Link = Scroll.Link;

    return (
        <nav className="App__Nav">
            <ul className="App__NavList">
                <li>
                    <Link to="/movies#Popular">Popular</Link>
                </li>
                <li>
                    <Link to="/movies#Upcoming">Upcoming</Link>
                </li>
                <li>
                    <Link to="/movies#TopReviewed">Top Reviewed</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AnchorItemsMovies;