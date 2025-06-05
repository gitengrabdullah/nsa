import { useState } from "react";
import './splash.css'

const PASSKEY = "NSA2025Secure";

function Splash() {
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState("");
  const [access, setAccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey === PASSKEY) { 
      setAccess(true);
    } else {
      setError("Passkey da aka saka ba daidai bane.");
    }
  };

  if (access) {
    return (
      <div className="dashboard">
        <h1 className="dashboard-text">Barka da zuwa NSA Dashboard</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <h1 className="title">NSA Enterprise Management System</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="block text">Shigar da Passkey:</label>
        <input
          type="password"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter passkey"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="rounded2"
        >
          <p>Shiga</p>
        </button>
      </form>
    </div>
  );
}

export default Splash;
