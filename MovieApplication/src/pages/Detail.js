import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import ViewDetails from '../components/ViewDetail';

const Detail = () => {

    const [movieDetails, setMovieDetails] = useState([]);
    const getDetails = async (props) => {
        try {
          const url = `https://api.themoviedb.org/3/movie/${props.match.id}?api_key=d1bcb8d2a4a032769052351a4a5bee58`;
          const response = await fetch(url);
          const data = await response.json();
          setMovieDetails(data.results);
        } catch {
          console.error('there has been an error');
        }
    };

    useEffect(() => {
        getDetails();
      });

    return (
        <>
            <Header/>
            <ViewDetails movieDetails={movieDetails}/>
        </>
    );
};

export default Detail;