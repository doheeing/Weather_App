import "./App.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
// import Background from "./component/Background";

// 1. 앱이 실행되자 마자 현재 위치 기반의 날씨 정보가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태정보가 들어감
// 3. 밑에는 5개의 버튼이 있다. (한 개는 현재위치, 나머지는 다른 도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 보인다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치", lat, lon);
      getWeatherCurrnetLocation(lat, lon);
    });
  };

  const getWeatherCurrnetLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70f81e7736ec6f2ffeb49b334772de55&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70f81e7736ec6f2ffeb49b334772de55&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data", data);
    setWeather(data);
    setLoading(false);
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      getCurrentLocation();
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // 아래 처럼 하면 지금 기존 초기 값이 ""빈 array이기 때문에 에러가 남
  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  return (
    <div>
      <div>
        {loading ? (
          <div class="container">
            <ClipLoader color="blue" size={150} loading={loading} />
          </div>
        ) : !apiError ? (
          <div class="container">
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </div>
        ) : (
          apiError
        )}
      </div>
    </div>
  );
}

export default App;
