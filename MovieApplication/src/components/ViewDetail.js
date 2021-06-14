import React from 'react';

const ViewDetails = (props) => {
    return (
        <div className="Movie__Details">
            {props.movieDetails.map((movie, index) => 
                <p>${movie.name}</p>
            )}
        </div>
    );
};

export default ViewDetails;