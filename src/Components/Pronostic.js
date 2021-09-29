import React from 'react'
import '../Styles/Pronostic.css'

function Pronostic() {
  return (
    <section className="frmPronostic"> 
      <div className="frmHead">
        <div className="btnCelsius">
          <a href="#"></a>
        </div>
        <div className="btnFarenheit">
          <a href="#"></a>
        </div>
      </div>
      <div className="frmMain">
        <div className="row justify-content-center mt-3">
          <div className="card">
            <div className="forecastDay">Tomorrow</div>
            <div className="weatherForecast">
              <div className="imgWeatherForecast"></div>
            </div>
            <div class="lblTempForecast">
              <div className="lblTempMin">
                <div className="forecastTempValue">19</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
              <div className="lblTempMax">
                <div className="forecastTempValue">32</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="forecastDay">Tomorrow</div>
            <div className="weatherForecast">
              <div className="imgWeatherForecast"></div>
            </div>
            <div class="lblTempForecast">
              <div className="lblTempMin">
                <div className="forecastTempValue">19</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
              <div className="lblTempMax">
                <div className="forecastTempValue">32</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="forecastDay">Tomorrow</div>
            <div className="weatherForecast">
              <div className="imgWeatherForecast"></div>
            </div>
            <div class="lblTempForecast">
              <div className="lblTempMin">
                <div className="forecastTempValue">19</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
              <div className="lblTempMax">
                <div className="forecastTempValue">32</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="forecastDay">Tomorrow</div>
            <div className="weatherForecast">
              <div className="imgWeatherForecast"></div>
            </div>
            <div class="lblTempForecast">
              <div className="lblTempMin">
                <div className="forecastTempValue">19</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
              <div className="lblTempMax">
                <div className="forecastTempValue">32</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="forecastDay">Tomorrow</div>
            <div className="weatherForecast">
              <div className="imgWeatherForecast"></div>
            </div>
            <div class="lblTempForecast">
              <div className="lblTempMin">
                <div className="forecastTempValue">19</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
              <div className="lblTempMax">
                <div className="forecastTempValue">32</div>
                <div className="celsiusDegrees">ºC</div>
              </div>
            </div>
          </div>
        </div>
        <div className="subSectionTitle">
          <h5>Today's Highlights</h5>
        </div>
        <div className="row2 col-6">
          <div className="card2"> 
            <div className="cardTitle">Humidity</div>
            <div className="cardBody">
              <div className="measureValue">7</div>
              <div className="measureUnit">mph</div>
            </div>
            <div className="cardIcon">WSW</div>
          </div>
          <div className="card2"> 
            <div className="cardTitle">Humidity</div>
            <div className="cardBody">
              <div className="measureValue">7</div>
              <div className="measureUnit">mph</div>
            </div>
            <div className="cardIcon">WSW</div>
          </div>
        </div>
        <div className="row2">
          <div className="card3"> 
            <div className="cardTitle">Humidity</div>
            <div className="cardBody">
              <div className="measureValue">7</div>
              <div className="measureUnit">mph</div>
            </div>
            <div className="cardIcon">WSW</div>
          </div>
          <div className="card3"> 
            <div className="cardTitle">Humidity</div>
            <div className="cardBody">
              <div className="measureValue">7</div>
              <div className="measureUnit">mph</div>
            </div>
            <div className="cardIcon">WSW</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pronostic
