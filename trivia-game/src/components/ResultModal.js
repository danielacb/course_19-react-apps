import React from "react";

export default function ResultModal() {
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
        <h3>
          <span role="img" aria-label="Oncoming Fist">
            👊👊👊
          </span>
          <br />
          YOU WON!
        </h3>

        <h3>
          <span role="img" aria-label="Crying">
            😟😢😟
          </span>
          <br />
          YOU LOST!
        </h3>

        <div className="correct-answer">
          <small>The correct answer was:</small>
          <br />
          <strong>Answer here</strong>
        </div>

        <button>
          Go to next question{" "}
          <span role="img" aria-label="Backhand Index Pointing Right">
            👉
          </span>
        </button>
      </div>
    </div>
  );
}
