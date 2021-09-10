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

      </div>
      <div className="frmFoot">

      </div>
    </section>
  )
}

export default Main
