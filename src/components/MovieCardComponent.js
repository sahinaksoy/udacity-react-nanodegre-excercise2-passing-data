import React from "react";

const MovieCardComponent = (props) => 
{
  const {movie} = props;
  return (
          <h2>{movie.name}</h2>
    )
}

export default MovieCardComponent;