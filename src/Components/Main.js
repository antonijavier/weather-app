import React from 'react'
import '../Styles/Main.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter,
         Link,
         Route
       } from 'react-router-dom';

function Main() {
  const [currentWeather,setCurrentWeather] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      const currentLatitude = position.coords.latitude;
      const currentLongitude = position.coords.longitude;
      fetch(`https://powerful-mountain-49469.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${currentLatitude},${currentLongitude}`)
        .then(response => response.json())
        .then(response => console.log(response));
    })
  }, []);
  //console.log(currentWeather);
  //const celsiusTemp = Math.ceil(currentWeather.main.temp/10);
  const currentTime = Date.now();
  const today = new Date(currentTime);
  return (
    <BrowserRouter>
    <section className="scrMain"> 
      <div className="frmHead">
        <div className="btnSearch4Places">
          <Link to="/Search" className="lnkSearch4Places">Search For Places</Link>
        </div>
        <div className="btnLocation">
          <a href="#"></a>
        </div>
      </div>
      <div className="frmMain">
        <div className="imgWeatherState"></div>
        <div class="lblTemperature">
          <div className="temperatureValue">{/*celsiusTemp*/}</div>
          <div className="degrees">ºC</div>
        </div>
        <div className="lblTimeState">{/*currentWeather.weather[0].main*/}</div>
      </div>
      <div className="frmFoot">
        <div className="d-flex justify-content-center">
          <div className="upperFooter">Today</div>
          <div className="upperFooter">.</div>
          <div className="upperFooter">{today.toDateString()}</div>
        </div>
        <div className="footer">{/*currentWeather.name*/}</div>
      </div>
    </section>
    </BrowserRouter>
  )
}

export default Main
