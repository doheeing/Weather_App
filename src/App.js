import "./App.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실행되자 마자 현재 위치 기반의 날씨 정보가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태정보가 들어감
// 3. 밑에는 5개의 버튼이 있다. (한 개는 현재위치, 나머지는 다른 도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 보인다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치", lat, lon);
      getWeatherCurrnetLocation(lat, lon);
    });
  };

  const getWeatherCurrnetLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=70f81e7736ec6f2ffeb49b334772de55&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
  const changeLocation =async (location) => {
    console.log("jeju")
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=33.5089580544693&lon=126.50214948318258&appid=70f81e7736ec6f2ffeb49b334772de55&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };



  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
