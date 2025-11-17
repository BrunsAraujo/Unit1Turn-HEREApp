//City selection via props, test use for city selection logic - no log in
import { useState } from "react";
import CityList from "./components/CityList.jsx";
import CityItinerary from "./components/CityItinerary.jsx";

function App() {

    const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app">
      <h1>Cities to Choose</h1>
      {!selectedCity ? (
        <CityList onSelectCity={setSelectedCity} />
      ) : (
        <CityItinerary city={selectedCity} onBack={() => setSelectedCity(null)} />
      )}
    </div>
  );
}

export default App;
