import React from "react";
import { Route , useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from './MovieShow';

function MoviesPage({ movies }) {
  const match = useRouteMatch ;
  return (
    <div>
    

      <Route exact path={match.url}> <h2> Select a movie form the list please </h2> </Route>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieID`}> 
        <MovieShow movies={movies}> </MovieShow>
      </Route>


    </div>
  );
}
export default MoviesPage;