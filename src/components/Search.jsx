import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div>
        <input type="text" placeholder='Search for a movie' style={{width:"300px", padding:"10px", marginLeft:"50px", marginTop:"20px",outline:"none", borderRadius:"5px", border:"1px solid #ccc", marginBottom:"20px"}} 
        onChange={handleSearch}
        />
    </div>
  )
}

export default Search