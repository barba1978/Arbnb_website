import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'



const Weather=()=>{

    

    const[weather,setWeather]=useState("")

 const api = {
    key:'40dd313c5c37ca2ccb0b5894446c0467',
    base:"https://api.openweathermap.org/data/3.0/"}
    
        
useEffect(()=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.69&lon=9.67&lang=it&units=metric&appid=526b08ee92d1fd1506a37a2aaa1000bc")
  .then(elem=> elem.json())
  .then(data=> {
    console.log(data);
    setWeather(data)})
  .catch(err => console.log(err))


},[])

    return(
<div>
{typeof weather.main != "undefined" ? (
    <div className='div_around_weather'>
    <p>{weather.name}{weather.weather.map(elem=><img src="https://openweathermap.org/img/wn/03d@2x.png"/>)}</p>
    <h6>Descrizione:{weather.weather.map(elem=><div>{elem.description}</div>)}</h6>
    <h6>Temperatura minima:{weather.main.temp_min} °C</h6>
    <h6>Temperatura massima:{weather.main.temp_max} °C</h6>
    
    <p></p>
    </div>
):("")

} 


</div>
      
 
    )
  



}

export default Weather