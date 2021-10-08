import React, { createContext, useContext, useReducer } from "react";
import products from "../products";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = { cart: [] };

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, products.find((p) => p.sku === payload)],
      };
    case "REMOVE":
      const indexInCart = state.cart.findIndex(
        (product) => product.sku === payload
      );
      const newCart = [...state.cart];
      newCart.splice(indexInCart, 1);
      return { ...state, cart: newCart };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (sku) => dispatch({ type: "ADD", payload: sku });
  const removeItem = (sku) => dispatch({ type: "REMOVE", payload: sku });
  const emptyCart = () => dispatch({ type: "EMPTY" });

  function countItemsInCart(sku) {
    const itemsInCart =
      state.cart.filter((product) => product.sku === sku) ?? [];
    return itemsInCart.length;
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        cart: state.cart,
        countItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
