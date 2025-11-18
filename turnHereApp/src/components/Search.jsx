//filters cities and navigates to a new route when city is selected
// cities/{city} uses routing useNavigate from react-router-dom
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cityData } from "./cityData";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCities = Object.keys(cityData).filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container" style={{ padding: "20px", textAlign: "center" }}>
      <h2>Search for a City</h2>
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
            <button
              onClick={() => navigate(`/cities/${city}`)}
              style={{ fontSize: "1rem" }}
            >
              {city}
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;