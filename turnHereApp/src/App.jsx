//Adds rounting to /login and /cities, city selection via props, better login for user
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CollapsibleMenu from "./components/CollapsibleMenu";
import CityList from "./components/CityList";
import CityItinerary from "./components/CityItinerary";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleLogin = (username) => {
    alert(`Welcome, ${username}!`);
  };

  return (
    <Router>
      <Header />
      <CollapsibleMenu />

      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

        <Route
          path="/cities"
          element={
            <div className="app">
              <h1>Cities to Choose</h1>
              {!selectedCity ? (
                <CityList onSelectCity={setSelectedCity} />
              ) : (
                <CityItinerary
                  city={selectedCity}
                  onBack={() => setSelectedCity(null)}
                />
              )}
            </div>
          }
        />

        {/*Can add more routes here if needed to make it very reusable */}
      </Routes>
    </Router>
  );
}

export default App;
