import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [title, setTitle] = useState("Let the countdown begin!");
  const [isRunning, setIstRunning] = useState(false);
  const intervalRef = useRef(null);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  function startTimer() {
    if (intervalRef.current !== null) return;

    setTitle(`You're doing great!`);
    setIstRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep it Up!");
    setIstRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    setIstRunning(false);
  }

  useEffect(() => {
    document.title = `${minutes}:${seconds}`;
  });

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
