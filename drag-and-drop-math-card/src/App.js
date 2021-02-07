import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(1);
  const [secondNumber, setSecondNumber] = useState(2);
  const [operator, setOperator] = useState("+");

  function handleDrop(spot, item) {
    if (spot === firstNumber) setFirstNumber(item.text);
    if (spot === secondNumber) setSecondNumber(item.text);
    if (spot === operator) setOperator(item.text);
  }

  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        {/* math card */}
        <div className="math-card">
          <Spot
            type="number"
            text={firstNumber}
            spot={firstNumber}
            handleDrop={handleDrop}
          />
          <Spot
            type="number"
            text={secondNumber}
            spot={secondNumber}
            handleDrop={handleDrop}
          />
          <Spot
            type="operator"
            text={operator}
            spot={operator}
            handleDrop={handleDrop}
          />
          <div className="total">
            {eval(`${firstNumber}${operator}${secondNumber}`)}
          </div>
        </div>

        <div>
          <div className="cards numbers">
            {Array(10)
              .fill(0)
              .map((n, i) => (
                <Card type={"number"} key={i} text={i} />
              ))}
          </div>

          <div className="cards operators">
            {["*", "-", "+", "/"].map((o, i) => (
              <Card type={"operator"} key={i} text={o} />
            ))}
          </div>
        </div>
      </DndProvider>
    </div>
  );
}

function Spot({ type, text, spot, handleDrop }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: type,
    drop: (item) => {
      handleDrop(spot, item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let backgroundColor = "#f2f2f2";
  if (canDrop) backgroundColor = "#3db897";
  if (isOver) backgroundColor = "#4bdcb5";
  return (
    <div className="spot" ref={dropRef} style={{ backgroundColor }}>
      {text}
    </div>
  );
}

function Card({ type, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type, text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div className="card" ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
}
