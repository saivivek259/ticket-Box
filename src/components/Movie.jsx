import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
const TIMINGS = ["10:30 AM", "03:00 PM", "06:00 PM", "09:00 PM"];

const Movie = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {title, overview, poster_path} = location.state;
    const [latLng , setLatLng] = useState({});
    const [theatres, setTheatres] = useState([]);
    
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatLng({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            })  
        }
    },[])

    useEffect(() => {
       console.log(latLng);
       if (Object.keys(latLng).length > 0){
        const geoAPI = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:77.2090057,28.6138954,5000&bias=proximity:77.2090057,28.6138954&limit=20&apiKey=135359417d4d456e97b4b0ca1af7f4a1 `
              axios.get(geoAPI).then(res =>  {
               const featuresArr = res.data.features;
               const names = [];
               featuresArr.map((feature) => names.push(feature.properties.name))
               setTheatres(names);
              }); 
       }
    },[latLng])


    return (
        <div>
            <Row>    
                <Col>
                <div style={{padding: 70}}>
                 <img style={{borderRadius:8, marginBottom:24}} src={ IMAGE_API +poster_path} height={300} width={250}/>
                 <h4>{title}</h4>
                 <div>
                    {overview}
                 </div>
                </div>
                </Col>
                <Col>
                {theatres.map((theatre) => theatre)}
                 <div>
                   {
                    theatres.map((theatre, index) => {
                        return(
                            <div  key={index} style={{marginBottom: 20}}>
                                <h5 style={{marginBottom:10}}>{theatre}</h5>
                                {TIMINGS.map((time) => {
                                    return <Button onClick={() => {
                                        navigate('/select', {state: { title: title}})
                                    }} key={time} style={{marginRight: 20}}>{time}</Button>
                                })}
                            </div>

                        )

                    })
                   }
                </div> 
                </Col>
            </Row>
        </div>
    )
}

export default Movie;