import React, { useEffect, useRef, useState } from "react";
import CartIcon from "../supermarket.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartModalRef = useRef(null);

  function handleClick(e) {
    if (cartModalRef.current.contains(e.target)) return;
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={CartIcon} width="30" />({0})
          </button>

          <div
            className="cart-modal"
            style={{ display: isOpen ? "block" : "none" }}
            ref={cartModalRef}
          >
            cart goes here
          </div>
        </div>
      </div>
    </header>
  );
}
