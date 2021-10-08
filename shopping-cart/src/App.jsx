import React from "react";
import { CartProvider } from "./contexts/useCart";

import Header from "./components/Header";
import products from "./products";
import Product from "./components/Product";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        {/* header */}
        <Header />

        <main>
          <div className="products-list">
            {/* show products here */}
            {products.map((product) => (
              <Product key={product.sku} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
