// components/Search.jsx basic search that filters cities and passes the selected city to 
// a parent via onSelectCity.
import { useState } from "react";
import { cityData } from "./cityData";

function Search({ onSelectCity }) {
  const [query, setQuery] = useState("");

  const filteredCities = Object.keys(cityData).filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container" style={{ padding: "20px", textAlign: "center" }}>
      <h2>Search Cities</h2>
      <input
        type="text"
        placeholder="Type a city name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "60%", fontSize: "1rem" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredCities.map((city) => (
          <li key={city} style={{ margin: "10px 0" }}>
            <button onClick={() => onSelectCity(city)} style={{ fontSize: "1rem" }}>
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;