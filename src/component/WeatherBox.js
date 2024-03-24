import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
    // let temp = Math.floor(weather.main.temp)
  return (
    <div className="weather-box">
      <h1>{weather?.name}</h1>
      <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
      <h2>현재온도 : {weather && Math.round(weather.main.temp)}℃</h2>
      <h3>{weather && Math.round(weather.main.temp_max)}℃/{weather && Math.round(weather.main.temp_min)}℃</h3>
      <h5>{weather?.weather[0].description} </h5>
    </div>
  )
}

export default WeatherBox
