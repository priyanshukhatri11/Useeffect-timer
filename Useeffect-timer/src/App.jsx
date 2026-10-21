import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((time) => time + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  function resetTimer() {
    setSeconds(0);
    setRunning(false);
  }

  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <main className="timer-card">
      <h1>React useEffect Timer</h1>
      <div className="time">{hours}:{minutes}:{secs}</div>
      <p>This timer uses the useEffect hook to track time.</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop Timer" : "Start Timer"}
      </button>
      <button className="reset" onClick={resetTimer}>Reset Timer</button>
    </main>
  );
}

export default App;