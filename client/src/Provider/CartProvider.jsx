import React, { createContext, useEffect, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(()=>{
     // Load initial cart data from localStorage
     const savedCart = localStorage.getItem("cart");
     return savedCart ? JSON.parse(savedCart) : [];
  });



  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Keep localStorage updated
  }, [cart]);


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
