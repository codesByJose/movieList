import React from 'react';
import MovieCard from './MovieCard'
import movies from './movies'
import { useState } from 'react'
import Search from './Search'
import { useNavigate } from 'react-router';


const MovieList = () => {
   const navigate = useNavigate();
  const handleDetails = (movieName) => {
    navigate(`/movies/${movieName}`);
  }
  
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
   <>
    <Search handleSearch={handleSearch} />
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"20px", backgroundColor:"#f0f0f0", padding:"20px", borderRadius:"10px"}}>
        
        {movies.filter(movie => movie.movieName.toLowerCase().includes(search?.toLowerCase() || '')).map(movie => {
          return <MovieCard key={movie.id} movieName={movie.movieName} movieImage={movie.movieImage} rating={movie.rating} shortDescription={movie.shortDescription} releaseDate={movie.releaseDate} handleDetails={handleDetails} />
        })}
      </div>
    </>
  )
}

export default MovieList;