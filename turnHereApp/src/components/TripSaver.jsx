//This file handles the trip saver function, and the feedback section/save feedback
//the idea is once several users are added we can use the comments among users
//and users will be able to communicate in later versions
import { useState } from "react";
import ReusableButton from "./ReusableButton";

function TripSaver({ user }) {
  const [trip, setTrip] = useState("");
  const [savedTrips, setSavedTrips] = useState([]);

  const [feedback, setFeedback] = useState("");
  const [savedFeedbacks, setSavedFeedbacks] = useState([]);

  const handleSaveTrip = () => {
    if (trip.trim()) {
      setSavedTrips([...savedTrips, trip]);
      setTrip("");
    }
  };

  const handleSendFeedback = () => {
    if (feedback.trim()) {
      setSavedFeedbacks([...savedFeedbacks, feedback]);
      setFeedback("");
    }
  };

  return (
    <div className="trip-saver" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Welcome, {user}!</h2>

      {/* Trip Saver Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Save a Trip</h3>
        <input
          type="text"
          placeholder="Enter trip destination"
          value={trip}
          onChange={(e) => setTrip(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button onClick={handleSaveTrip}>Save Trip</button>

        <ul>
          {savedTrips.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>

      {/* Feedback Section */}
      <div>
        <h3>Submit Feedback</h3>
        <textarea
          placeholder="Share your thoughts about a trip..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button onClick={handleSendFeedback}>Send Feedback</button>

        <ul>
          {savedFeedbacks.map((f, index) => (
            <li key={index} style={{ marginTop: "10px", fontStyle: "italic" }}>
              “{f}”
            </li>
          ))}
        </ul>
        <br>

        </br>
        <ReusableButton label="Back to Home Page" />
      </div>
    </div>
  );
}

export default TripSaver;