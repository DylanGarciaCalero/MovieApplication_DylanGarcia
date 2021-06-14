import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="App__Search">
            <label><strong>Search for your movie here!</strong></label>
            <input className="Search__Input" 
            value={props.value} 
            onChange={(e) => props.setSearchInput(e.target.value)}
            placeholder="Search for movies.."></input>
        </div>
    );
};

export default SearchBox;