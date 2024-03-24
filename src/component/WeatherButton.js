import React from "react";
import Button from "react-bootstrap/Button";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div>
      <Button
        variant={`${selectedCity == null ? "outline-primary" : "primary"}`}
        onClick={() => handleCityChange("current")}
      >
        Current
      </Button>

      {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "outline-primary" : "primary"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
