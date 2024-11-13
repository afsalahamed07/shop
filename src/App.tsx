import React, { useState } from "react";
import Navbar from "./components/navbar/NavBar";

import "./App.css";
import Footer from "./components/footer/Footer";
import { Outlet, useOutletContext } from "react-router-dom";
import Item from "./components/products/item";

type ContextType = {
  cart: Item[] | null,
  addToCart: (item: Item) => void,
  removeFromCart: (item: Item) => void
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Item[] | null>(null); // TODO: implement the cart logic

  const addToCart = (item: Item) => {
    // TODO: Have to prevent duplicates
    setCart((prev) => {
      const clone = prev ? [...prev] : [];
      clone.push(item);
      return clone;
    })

    console.log(cart);
  }

  const removeFromCart = (item: Item) => setCart((prev) =>
    prev && prev.filter((pItem) => pItem.id != item.id)
  )


  return (
    <div className="app">
      <Navbar />
      <Outlet context={{ cart, addToCart, removeFromCart } satisfies ContextType} />
      <Footer />
    </div>
  );
};

export function useCart() {
  return useOutletContext<ContextType>();
}

export default App;
