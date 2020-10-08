import React from 'react';
import './Headline.css'

const Headline = () => {
    return (
      <div className="headline">
        <h1>I grow by helping people in need.</h1>
        <input className = "search" type="text" placeholder="search..."></input>
        <button className = "search-btn">Search</button>
        
      </div>
    );
};

export default Headline;