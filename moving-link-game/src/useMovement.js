import { useState, useEffect } from "react";

export default function useMovement() {
  const [x, setX] = useState(72);
  const [y, setY] = useState(18);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(e) {
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowRight") move("right");
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function move(dir) {
    setDirection(dir);
    if (dir === "up") setY((y) => (y >= 20 ? y - 20 : 0));
    if (dir === "left") setX((x) => (x >= 20 ? x - 20 : 0));
    if (dir === "down")
      setY((y) =>
        y <= window.innerHeight - 52 ? y + 20 : window.innerHeight - 32
      );
    if (dir === "right")
      setX((x) =>
        x <= window.innerWidth - 50 ? x + 20 : window.innerWidth - 30
      );
  }

  return { x, y, direction, move };
}
