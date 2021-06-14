import React from 'react';
import { Link } from 'react-router-dom';

const UpComingMovieList = (props) => {
    const url_base = "https://image.tmdb.org/t/p/w500/";
    return (
        <ul className="Movies__Upcoming">
            {props.upcomingMovies.map((movie, index) => <li>
                <Link to={`/series/${movie.id}`}>
                <img src={`${url_base}${movie.poster_path}`} alt={`${movie.original_title} poster`} loading="lazy"></img>
                <p>{movie.original_title}</p>
                <p>{movie.name}</p>
                </Link>
            </li>)}
        </ul>
    );
};

export default UpComingMovieList;