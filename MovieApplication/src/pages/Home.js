
import React, { useState, useEffect } from 'react';
import SearchedMovieList from '../components/SearchedMovieList';
import PopularMovieList from '../components/PopularMovieList';
import LatestMovieList from '../components/LatestMovieList';
import TrendingMovieList from '../components/TrendingMovieList';
import Header from '../components/Header';
import AnchorItemsHome from '../components/AnchorItemsHome';
import SearchBox from '../components/SearchBox';

const Home = () => {

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
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

      const getLatestMovieAPI = async () => {
        try {
            const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=d1bcb8d2a4a032769052351a4a5bee58";
            const response = await fetch(url);
            const data = await response.json();
            setLatestMovies(data.results);
          } catch {
            console.error('there has been an error');
          }
      };

      const getTrendingMovieAPI = async () => {
        try {
            const url = "https://api.themoviedb.org/3/trending/all/day?api_key=d1bcb8d2a4a032769052351a4a5bee58";
            const response = await fetch(url);
            const data = await response.json();
            setTrendingMovies(data.results);
          } catch {
            console.error('there has been an error');
          }
      };
    
      useEffect(() => {
        getSearchedMovieApi(searchInput);
        getPopularMovieAPI();
        getLatestMovieAPI();
        getTrendingMovieAPI();
      }, [searchInput]);

    return (
        <>
            <Header/>
            <SearchBox searchInput={searchInput} setSearchInput={setSearchInput}/>
            <div className="Anchor__Items">
                <p>On this page:</p>
                <AnchorItemsHome/>
            </div>
            <div className="Popular__Movies">
                <h2>Your search results</h2>
                <SearchedMovieList searchedMovies={searchedMovies}/>
                <h2 id="Popular">Popular</h2>
                <PopularMovieList popularMovies={popularMovies}/>
                <h2 id="LatestTrailers">Latest Trailers</h2>
                <LatestMovieList latestMovies={latestMovies}/>
                <h2 id="TrendingMovies">Trending Movies</h2>
                <TrendingMovieList trendingMovies={trendingMovies}/>
            </div>
        </>
    );
};

export default Home;