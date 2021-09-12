import React from 'react'
import '../Styles/Main.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Main() {
  const [currentWeather,setCurrentWeather] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      const currentLatitude = position.coords.latitude;
      const currentLongitude = position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=3b7f2699afa3a2b22d46f515d82d65fb`)
        .then(response => response.json())
        .then(response => setCurrentWeather(response));
    })
  }, []);
  const celsiusTemp = Math.ceil([(5/9)*(currentWeather.main.temp-32)]/10);
  const currentTime = Date.now();
  const today = new Date(currentTime);
  return (
    <section className="scrMain"> 
      <div className="frmHead">
        <div className="btnSearch4Places">
          <a href="#" className="lnkSearch4Places">Search For Places</a>
        </div>
        <div className="btnLocation">
          <a href="#"></a>
        </div>
      </div>
      <div className="frmMain">
        <div className="imgWeatherState"></div>
        <div class="lblTemperature">
          <div className="temperatureValue">{celsiusTemp}</div>
          <div className="degrees">ºC</div>
        </div>
        <div className="lblTimeState">{currentWeather.weather[0].main}</div>
      </div>
      <div className="frmFoot">
        <div className="d-flex justify-content-center">
          <div className="upperFooter">Today</div>
          <div className="upperFooter">.</div>
          <div className="upperFooter">{today.toDateString()}</div>
        </div>
        <div className="footer">{currentWeather.name}</div>
      </div>
    </section>
  )
}

export default Main
