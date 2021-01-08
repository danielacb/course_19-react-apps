import React from "react";

export default function ResultModal({ isCorrect, correctAnswer, getQuestion }) {
  return (
    <div className={`result-modal ${isCorrect ? "is-correct" : "is-wrong"}`}>
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect ? (
          <h3>
            <span role="img" aria-label="Oncoming Fist">
              👊👊👊
            </span>
            <br />
            YOU WON!
          </h3>
        ) : (
          <>
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
              <strong dangerouslySetInnerHTML={{ __html: correctAnswer }} />
            </div>
          </>
        )}

        <button onClick={getQuestion}>
          Go to next question{" "}
          <span role="img" aria-label="Backhand Index Pointing Right">
            👉
          </span>
        </button>
      </div>
    </div>
  );
}
