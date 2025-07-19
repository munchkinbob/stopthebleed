import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Gateway Health: {status}</h1>
      </header>
    </div>
  );
}

export default App;
