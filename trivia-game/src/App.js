import React, { useState, useEffect, useCallback } from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

export default function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [isCorrect, setIsCorrect] = useState(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);

    let url = "https://opentdb.com/api.php?amount=1";
    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuestion(data.results[0]));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  function handleQuestionAnswer(answer) {
    setIsCorrect(answer === question.correct_answer);
    console.log(isCorrect);
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          correctAnswer={question.correct_answer}
          getQuestion={getQuestion}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question question={question} answerQuestion={handleQuestionAnswer} />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
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
