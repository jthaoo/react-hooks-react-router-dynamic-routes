import React from 'react'
import { Link } from 'react-router-dom'



function MoviesList({ movies }) {
    const renderMoviesList = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ));

    return (
        <ul>{renderMoviesList}</ul>
    );
}


export default MoviesList;