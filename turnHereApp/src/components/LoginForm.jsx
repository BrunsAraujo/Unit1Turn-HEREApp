import { useState } from "react";
import ReusableButton from "./ReusableButton";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username); // can also pass password if needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>User Login</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button type="submit">Login</button>
      <br>

      </br>
    <ReusableButton label="Back to Home Page" />
    </form>
    
  );
}

export default LoginForm;