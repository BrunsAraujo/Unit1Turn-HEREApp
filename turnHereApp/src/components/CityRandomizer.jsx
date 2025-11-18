import React, { useState } from 'react';
import { cityData } from "./cityData";

function CityRandomizer() {
  const [currentCity, setCurrentCity] = useState(null);

  const cityArray = Object.entries(cityData).map(([name, data]) => ({
    name,
    ...data
  }));

  const pickRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * cityArray.length);
    setCurrentCity(cityArray[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <button onClick={pickRandomCity}>Pick a Random City</button>
      {currentCity && (
        <div style={{ marginTop: "20px" }}>
          <h2>{currentCity.name}</h2>
          <p>{currentCity.summary}</p>
          <p>{currentCity.details}</p>
        </div>
      )}
    </div>
  );
}

export default CityRandomizer;