import { useState } from "react";
// import './splash.css'

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
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-green-800">Barka da zuwa NSA Dashboard</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">NSA Enterprise Management System</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <label className="block text-gray-700 mb-2">Shigar da Passkey:</label>
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Shiga
        </button>
      </form>
    </div>
  );
}

export default Splash;
