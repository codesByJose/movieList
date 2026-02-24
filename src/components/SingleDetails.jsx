import React from 'react'
import { useParams } from 'react-router'
import movies from './movies';

const SingleDetails = () => {
    const {movieName} = useParams();
  
  return (
    <div>
      {movies.map(movie => {
        if (movie.movieName === movieName) {
          return (
            <div key={movie.id}>
              <h1>Movie Name: {movie.movieName}</h1>
              <img src={movie.movieImage} alt={movie.movieName} />
              <p>Movie Description: {movie.shortDescription}</p>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          );
        }
        return null;
      })} 
    </div>
  )
}

export default SingleDetails