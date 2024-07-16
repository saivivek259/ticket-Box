import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Movie_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=98af61af9b6229523244583a80603866&languages=en-US'
const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('userEmail');
        //not logged in
        if(!user) {
            navigate('/login')
        }
    },[])
    useEffect(() => {
     axios.get(Movie_API).then((resp) => {
        setMovies(resp.data.results);
     })
    }, []);

     const handleClick = (movie) => {
         navigate('/movie/'+movie.id, {state : movie});

     }
     return (
         <div style={{padding:30, display: 'flex', flexWrap: 'wrap'}}>
             {movies.map(movie => {
                 return(
                     <div key={movie.id}>
                 <Card onClick={() => handleClick(movie)} style={{width: '25rem',padding: 25, height:'auto', overflow: 'hidden',margin: 10}}>
                     <Card.Img src={IMAGE_API + movie.poster_path} height={200} width={120}></Card.Img>

                 <Card.Title>{movie.title}</Card.Title>

                 </Card>
                 </div>
                 )
             })}
             </div>
     )
 }

 export default Home;