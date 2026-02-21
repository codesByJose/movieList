import React from 'react'
import MovieCard from './MovieCard'
import movies from './movies'
import { useState } from 'react'
import Search from './Search'

const MovieList = () => {
  const [search, setSearch] = useState(null);
  // create a search function that will filter the movies based on the search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
   <>
    <Search handleSearch={handleSearch} />
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"20px", backgroundColor:"#f0f0f0", padding:"20px", borderRadius:"10px"}}>
        
        {movies.filter(movie => movie.movieName.toLowerCase().includes(search?.toLowerCase() || '')).map(movie => {
          return <MovieCard key={movie.id} movieName={movie.movieName} movieImage={movie.movieImage} rating={movie.rating} shortDescription={movie.shortDescription} releaseDate={movie.releaseDate}   />
        })}
      </div>
    </>
  )
}

export default MovieList