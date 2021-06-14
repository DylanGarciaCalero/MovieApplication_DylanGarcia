import React from 'react';
import { Link } from 'react-router-dom';

const TopReviewedMovieList = (props) => {
    const url_base = "https://image.tmdb.org/t/p/w500/";
    return (
        <ul className="Movies__Rating">
            {props.topReviewedMovies.map((movie, index) => <li>
                <Link to={`/series/${movie.id}`}>
                <img src={`${url_base}${movie.poster_path}`} alt={`${movie.original_title} poster`} loading="lazy"></img>
                <p>{movie.original_title}</p>
                <p>{movie.name}</p>
                <p class="Movies__Rated">Rating: {movie.vote_average}/10</p>
                </Link>
            </li>)}
        </ul>
    );
};

export default TopReviewedMovieList;