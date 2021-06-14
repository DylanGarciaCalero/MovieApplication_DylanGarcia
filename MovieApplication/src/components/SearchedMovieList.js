import React from 'react';
import { Link } from 'react-router-dom';

const SearchedMovieList = (props) => {
    const url_base = "https://image.tmdb.org/t/p/w500/";
    return (
        <ul className="Movies__Searched">
            {props.searchedMovies.map((searchedMovie, index) => <li>
                <Link to={`/series/${searchedMovie.id}`}>
                <img src={`${url_base}${searchedMovie.poster_path}`} alt={`${searchedMovie.original_title} poster`} loading="lazy"></img>
                <p>{searchedMovie.original_title}</p>
                </Link>
            </li>)}
        </ul>
    );
};

export default SearchedMovieList;