import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
    // let temp = Math.floor(weather.main.temp)
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>현재온도 : {weather && Math.round(weather.main.temp)}도</h2>
      <h3>최고온도 : {weather && Math.round(weather.main.temp_max)}도</h3>
      <h3>최저온도 : {weather && Math.round(weather.main.temp_min)}도</h3>
      <h5>{weather?.weather[0].description} </h5>
    </div>
  )
}

export default WeatherBox
