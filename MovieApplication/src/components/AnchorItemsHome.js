import React from 'react';

import { HashLink as Link} from 'react-router-hash-link';

//SMOOTH SCROLLING WERKT NIET
import * as Scroll from 'react-scroll';

const AnchorItemsHome = (props) => {

    // let Link = Scroll.Link;

    return (
        <nav className="App__Nav">
            <ul className="App__NavList">
                <li>
                    <Link to="/#Popular">Popular</Link>
                </li>
                <li>
                    <Link to="/#LatestTrailers">Latest Trailers</Link>
                </li>
                <li>
                    <Link to="/#TrendingMovies">Trending Movies</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AnchorItemsHome;