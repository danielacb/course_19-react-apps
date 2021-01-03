import React, { useState } from "react";

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
    top: 0,
    opacity: 0,
  });

  function moveHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 100,
      top: e.nativeEvent.layerY - 90,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
    });
  }
  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}
