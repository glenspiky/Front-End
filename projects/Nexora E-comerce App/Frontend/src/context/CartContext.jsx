import React, { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// 1. Create context
const CartContext = createContext();

// 2. Create provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("myShopCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("myShopCart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product, quantity = 1) => {
    const actualQty = Math.max(1, quantity);
    toast.success(
      <span>
        Added {actualQty}x{" "}
        <span style={{ color: "#006400", fontWeight: "bold" }}>
          {product.title}
        </span>{" "}
        to cart!
      </span>,
    );
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + actualQty }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: actualQty }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      <Toaster />
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook
export const useCart = () => useContext(CartContext);
