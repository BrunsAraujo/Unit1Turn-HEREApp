//adds the Search, Footer and routes both. CityItinerary3 supports both props and URL. It betters the user experience.
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CollapsibleMenu from "./components/CollapsibleMenu";
import CityList from "./components/CityList";
import CityItinerary from "./components/CityItinerary";
import Search from "./components/Search.jsx";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleLogin = (username) => {
    alert(`Welcome, ${username}!`);
  };

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
        <Header />
        <CollapsibleMenu />

        {/* Main content area */}
        <div style={{ flex: 1 }}>
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
            <Route
              path="/search"
              element={<Search onSelectCity={setSelectedCity} />}
            />
            <Route path="/cities/:cityName" element={<CityItinerary />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
