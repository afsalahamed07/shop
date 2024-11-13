import React, { useReducer } from "react";
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

type CartAction =
  | { type: "add_to_cart"; item: Item }
  | { type: "remove_from_cart"; item: Item };

const App: React.FC = () => {
  const [cart, cartDispatch] = useReducer(cartReducer, [] as Item[])


  // NOTE: creating a reducer funcciont in here. but can have it different
  function cartReducer(state: Item[], action: CartAction): Item[] {
    switch (action.type) {
      case "add_to_cart": {
        // TODO: Have to prevent 
        return state.length > 0 ? [...state, action.item] : [action.item];
      }
      case "remove_from_cart": {
        return state.length > 0 ? state.filter((item) => item.id != action.item.id) : [];
      }
    }
  }


  const addToCart = (item: Item) => {
    cartDispatch({ type: "add_to_cart", item: item })
    console.log(cart);
  }

  const removeFromCart = (item: Item) =>
    cartDispatch({ type: "remove_from_cart", item: item })



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
