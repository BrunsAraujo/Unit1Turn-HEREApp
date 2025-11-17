//Uses useParams() to extract cityName from the route, uses react router

import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { cityData } from "./cityData";

function CityItinerary() {
  const { cityName } = useParams();
  const [itinerary, setItinerary] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (cityName && cityData[cityName]) {
      setItinerary(cityData[cityName]);
    } else {
      setItinerary(null);
    }
  }, [cityName]);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="itinerary">
      <h2>Itinerary for {cityName}</h2>
      {itinerary ? (
        <>
          <p>{itinerary.summary}</p>
          <button onClick={scrollToDetails}>View Details</button>
          <div ref={detailsRef} className="details">
            <h3>Details</h3>
            <p>{itinerary.details}</p>
          </div>
        </>
      ) : (
        <p>No itinerary available for this city.</p>
      )}
    </div>
  );
}

export default CityItinerary;