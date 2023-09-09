import React,{ createContext, useState } from "react";
import commerce from "../lib/commerce"
export const cartContext = createContext();
export default function ContextProvider ({ children }) {
  const [cart, setCart] = useState({});
  const cartFetcher = async () => {
    let newCart = await commerce.cart.retrieve()
    if(JSON.stringify(cart) == JSON.stringify(newCart) ) {return ;}
    setCart(newCart)
  };
  return (
    <cartContext.Provider value={{ cart, setCart, cartFetcher }}>
      {children}
    </cartContext.Provider>
  );
};

