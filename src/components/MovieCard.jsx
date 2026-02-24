import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


function MovieCard({movieName, movieImage, rating, shortDescription, releaseDate, handleDetails}) {
 
  return (
    <Card style={{ width: '13rem',  padding: "20px", margin: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", backgroundColor: "#ffffff" }}>
      <Card.Img variant="top" src={movieImage} 
      style={{ height: '200px', objectFit: 'cover', borderRadius: "10px", width: "100%" }} />
      <Card.Body>
        <Card.Title style={{marginTop:"5px", color:"black", fontWeight:"bold", fontSize:"22px"}}>{movieName}</Card.Title>
        {/* <Card.Text style={{width:"100%", color:"grey", fontSize:"16px"}}>
          {shortDescription}
        </Card.Text> */}
        <Card.Text style={{color:"black", fontWeight:"bold", fontSize:"14px"}}>
         Release Date: {releaseDate}
        </Card.Text>
          <Card.Text style={{color:"black", fontWeight:"bold", fontSize:"14px"}}> Rating: {rating}</Card.Text>
        <Button variant="primary" onClick={() => handleDetails(movieName)}>See Movie Details</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;