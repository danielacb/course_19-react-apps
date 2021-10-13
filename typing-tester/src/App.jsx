import React, { useEffect, useState, useRef } from "react";
import useCountDown from "react-countdown-hook";
import "./App.css";

// to calculate typing speed
// words typed / minutes
// words typed = (characters - typos) / 5

const secondsToCount = 15;
const paragraph = `Coding is the best. We are able to build something from scratch. It is literally imagination incarnate. Solving our own problems through coding is one of the coolest things we could do!`;

function findTypos(str1, str2) {
  let typos = [];

  str2.split("").forEach((char, index) => {
    if (char !== str1.charAt(index)) typos.push(index);
  });

  return typos;
}

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [typoIndexes, setTypoIndexes] = useState([]);
  const textAreaRef = useRef(null);

  const [timeLeft, { start, reset }] = useCountDown(secondsToCount * 1000, 100);

  useEffect(() => {
    setTypoIndexes(findTypos(paragraph, typedText));
  }, [typedText]);

  useEffect(() => {
    if (timeLeft !== 0 || typedText.length === 0) return;

    const wordsTyped = (typedText.length - typoIndexes.length) / 5;
    const minMultiplier = 60 / secondsToCount;

    const wpm = wordsTyped * minMultiplier;

    alert(`You typed at a ${wpm.toFixed(2)} WPM!`);
  }, [timeLeft]);

  function startTimer() {
    setTypedText("");
    textAreaRef.current.focus();
    start();
  }

  function resetTimer() {
    setTypedText("");
    reset();
  }

  return (
    <div className="app">
      {/* sidebar */}
      <div className="sidebar">
        <div className="timer">{(timeLeft / 1000).toFixed(2)}</div>
        <button className="start" onClick={() => startTimer()}>
          Start
        </button>
        <button className="reset" onClick={() => resetTimer()}>
          Reset
        </button>
      </div>

      <div className="content">
        {/* show the paragraph */}
        <p>
          {paragraph.split("").map((char, index) => {
            let charClass = "";
            const hasBeenTyped = typedText.length > index;

            if (hasBeenTyped)
              charClass = typoIndexes.includes(index) ? "incorrect" : "correct";

            return (
              <span key={index} className={charClass}>
                {char}
              </span>
            );
          })}
        </p>

        {/* show the textarea */}
        <form>
          <textarea
            rows="10"
            placeholder="Test your typing skills..."
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            ref={textAreaRef}
          />
        </form>
      </div>
    </div>
  );
}
