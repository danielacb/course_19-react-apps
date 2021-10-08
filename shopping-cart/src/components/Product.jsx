import React from "react";
import { useCart } from "../contexts/useCart";

export default function Product({ product }) {
  const { addItem, countItemsInCart, removeItem } = useCart();

  return (
    <div className="product">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="product-buttons">
        {countItemsInCart(product.sku) > 0 ? (
          <button className="remove" onClick={() => removeItem(product.sku)}>
            Remove
          </button>
        ) : (
          <div />
        )}
        <button className="add" onClick={() => addItem(product.sku)}>
          Add to cart ({countItemsInCart(product.sku)})
        </button>
      </div>
    </div>
  );
}
