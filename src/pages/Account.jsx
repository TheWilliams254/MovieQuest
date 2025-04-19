import React, { useState } from "react";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (!username || !password) {
      setMessage("Please fill out all fields.");
      return;
    }

    // Save user credentials to localStorage (simulated backend)
    localStorage.setItem("user", JSON.stringify({ username, password }));
    setMessage("Account created successfully! You can now log in.");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1>Create Account</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Account;
