//Props-based-Relies on "city" and "onBack" passed from parent, allows for cityitinerary display/filter
//React Hooks
import { useEffect, useState, useRef } from "react";
//imports data object containing itineraries for different cities
import { cityData } from "./cityData";

//This function defines the component cityItinerary abd accepts the props"city" and "onBack"
function cityItinerary({ city, onBack }) {
  //initializes "itinerary" as null so later can hold the itinerary data for the selected city
  const [itinerary, setItinerary] = useState(null);
  //Creates a reference to the details section so it can be scrolled into view
  const detailsRef = useRef(null);
//It will run whenever city changes. If "city" exists and is found in cityData.js, it sets the itinerary, otherwises clears it
  useEffect(() => {
    if (city && cityData[city]) {
      setItinerary(cityData[city]);
    } else {
      setItinerary(null);
    }
  }, [city]);
//smoothly scrolls to the details section when called
//Uses the detailsRef to locate the DOM node.
  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
//renders the component inside a container class "itinerary" and h2 displays the selected city name
  return (
    <div className="itinerary">
      <h2>Itinerary for {city}</h2>
      
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
      <button onClick={onBack}>Back to City List</button>
    </div>
  );
}

export default cityItinerary;