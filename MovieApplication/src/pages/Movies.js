import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PopularMovieList from '../components/PopularMovieList';
import SearchedMovieList from '../components/SearchedMovieList';
import UpComingMovieList from '../components/UpComingMovieList';
import TopReviewedMovieList from '../components/TopReviewedMovieList';
import AnchorItemsMovies from '../components/AnchorItemsMovies';
import SearchBox from '../components/SearchBox';

function Movies() {

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topReviewedMovies, setTopReviewedMovies] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const getSearchedMovieApi = async (searchInput) => {
        try {
          const url = `https://api.themoviedb.org/3/search/movie?api_key=d1bcb8d2a4a032769052351a4a5bee58&query=${searchInput}`;
          const response = await fetch(url);
          const data = await response.json();
          if(data.results) {
            setSearchedMovies(data.results)
          };
        } catch {
          console.error('there has been an error');
        };
    };

    const getPopularMovieAPI = async () => {
        try {
          const url = "https://api.themoviedb.org/3/movie/popular?api_key=d1bcb8d2a4a032769052351a4a5bee58";
          const response = await fetch(url);
          const data = await response.json();
          setPopularMovies(data.results);
        } catch {
          console.error('there has been an error');
        }
    };

    const getUpcomingMovieAPI = async () => {
        try {
          const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=d1bcb8d2a4a032769052351a4a5bee58";
          const response = await fetch(url);
          const data = await response.json();
          setUpcomingMovies(data.results);
        } catch {
          console.error('there has been an error');
        }
    };

    const getTopReviewedMovieAPI = async () => {
        try {
          const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=d1bcb8d2a4a032769052351a4a5bee58";
          const response = await fetch(url);
          const data = await response.json();
          setTopReviewedMovies(data.results);
        } catch {
          console.error('there has been an error');
        }
    };

      useEffect(() => {
        getSearchedMovieApi(searchInput);
        getPopularMovieAPI();
        getUpcomingMovieAPI();
        getTopReviewedMovieAPI();
    }, [searchInput]);

    return (
        <>
            <Header/>
            <div className="Movies__Info">
                <div className="Movies__Text">
                    <p>All these movies have been fetched using the API from themoviedb:</p>
                    <p><strong>Interested?</strong></p>
                    <a target="_blank" href="https://developers.themoviedb.org/3/getting-started/introduction">Find it here!</a>
                </div>
                <SearchBox searchInput={searchInput} setSearchInput={setSearchInput}/>
            </div>
            <div className="Anchor__Items">
                <p>On this page:</p>
                <AnchorItemsMovies/>
            </div>
            <div className="Popular__Movies">
                <h2>Your search results</h2>
                <SearchedMovieList searchedMovies={searchedMovies}/>
                <h2 id="Popular">Popular</h2>
                <PopularMovieList popularMovies={popularMovies}/>
                <h2 id="Upcoming">Upcoming</h2>
                <UpComingMovieList upcomingMovies={upcomingMovies}/>
                <h2 id="TopReviewed">Top Reviewed</h2>
                <TopReviewedMovieList topReviewedMovies={topReviewedMovies}/>
            </div>
        </>
    );
};

export default Movies;