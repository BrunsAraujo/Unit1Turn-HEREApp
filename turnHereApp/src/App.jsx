//rendering conditionally in single view/static. Using selectedCity state to toggle between CityList and CityItinerary
import CollapsibleMenu from "./components/CollapsibleMenu.jsx";
import Header from "./components/Header.jsx";


function App() {
    const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app">
      <Header />
      <CollapsibleMenu/>
      
      {/* Other components go here */}
   <h1>Weather Forecast</h1>
      {!selectedCity ? (
        <CityList onSelectCity={setSelectedCity} />
      ) : (
        <cityItinerary city={selectedCity} onBack={() => setSelectedCity(null)} />
      )}   
   
    </div>
  );
}

export default App;
