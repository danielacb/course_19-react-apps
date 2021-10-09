import React from "react";
import { useCart } from "../contexts/useCart";

export default function Cart() {
  const { addItem, removeItem, cartGroupedByItems, totalPrice } = useCart();

  return (
    <div className="cart">
      {/* show cart items here */}
      {cartGroupedByItems.length > 0 ? (
        cartGroupedByItems.map((product) => (
          <div className="cart-item" key={product.sku}>
            <img src={product.image_url} alt={product.name} />
            <div className="content">
              <h3>{product.name}</h3>
              <div className="cart-buttons">
                <button onClick={() => removeItem(product.sku)}>-</button>
                <button>{product.quantity}</button>
                <button onClick={() => addItem(product.sku)}>+</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-item">
          <h3>Your cart is empty</h3>
        </div>
      )}
      <div className="total">${totalPrice()}</div>
    </div>
  );
}
