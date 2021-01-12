import React, { useState, useEffect, useCallback } from "react";
import TimerSlot from "./components/TimerSlot";
import { useStopwatch } from "react-timer-hook";
import { useSpeechSynthesis } from "react-speech-kit";
import "./App.css";

export default function App() {
  const [timers, setTimers] = useState([
    { time: 2, text: "this is my message" },
    { time: 5, text: "hello" },
    { time: 8, text: "whats up" },
  ]);

  function updateTimers(index, time, text) {
    const newTimers = [...timers];
    timers[index].time = time;
    timers[index].text = text;

    setTimers(newTimers);
  }

  function addTimer() {
    const newTimers = [...timers, { time: 10, text: "hello" }];
    setTimers(newTimers);
  }

  const { seconds, isRunning, start, reset } = useStopwatch();
  const { speak, speaking, supported } = useSpeechSynthesis();

  // eslint-disable-next-line
  const doReset = useCallback(() => reset(), []);
  // eslint-disable-next-line
  const doSpeak = useCallback(() => speak(), []);

  useEffect(() => {
    const foundTimer = timers.find((t) => t.time === seconds);
    if (foundTimer) {
      doSpeak({ text: foundTimer.text });
    }

    if (seconds > timers[timers.length - 1].time) doReset();
  }, [seconds, timers, doReset, doSpeak]);

  if (!supported) {
    return <div>Your browser is not supported! Try another one!</div>;
  }

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}
        {timers.map((timer, index) => (
          <TimerSlot
            key={index}
            timer={timer}
            index={index}
            updateTimers={updateTimers}
          />
        ))}

        <button className="add-button" onClick={addTimer}>
          Add
        </button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        {!isRunning && (
          <button className="start-button" onClick={start}>
            Start
          </button>
        )}
        {isRunning && (
          <button className="stop-button" onClick={reset}>
            Stop
          </button>
        )}
        {speaking && <p>I am speaking...</p>}
      </div>
    </div>
  );
}
