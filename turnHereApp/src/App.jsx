//adds routing with react-router-dom and login (hardcoded)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CollapsibleMenu2 from "./components/CollapsibleMenu2";
import LoginForm from "./components/LoginForm";

function App() {
  const handleLogin = (username) => {
    alert(`Welcome, ${username}!`);
  };

  return (
    <Router>
      <Header />
      <CollapsibleMenu2 />
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
