import React, { useState } from "react";
import App from "./App"; 

const PasswordApp = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "Brington@123"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Guest Area</h1>
          <p className="text-gray-600 mb-6">
            Please enter the password below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-64 text-center focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <br />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700 transition"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <App />;
};

export default PasswordApp;
