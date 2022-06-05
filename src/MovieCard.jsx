import React from 'react';

const MovieCard = ({ firstmovie }) => {
    return (
    <div className="movie">
        <div>
            <p>{firstmovie.Year}</p>
        </div>
        <div>
            <img src={firstmovie.Poster !== 'N/A' ? firstmovie.Poster : 'https://via.placeholder.com/400'} alt={firstmovie.Title} />
        </div>
        <div>
            <span>{firstmovie.Type}</span>
            <h3>{firstmovie.Title}</h3>
        </div>
    </div>
    );
};

export default MovieCard;