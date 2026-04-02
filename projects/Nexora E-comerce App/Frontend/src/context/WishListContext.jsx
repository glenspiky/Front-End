import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage on startup
  useEffect(() => {
    const data = localStorage.getItem("user_wishlist");
    // Only parse if data exists, otherwise default to empty array
    const saved = data ? JSON.parse(data) : [];

    // Extra Security: Ensure 'saved' is actually an Array before setting state
    if (Array.isArray(saved)) {
      setWishlist(saved);
    } else {
      setWishlist([]);
    }
  }, []);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        // Remove if already there (Toggle off)
        return prev.filter((item) => item.id !== product.id);
      }
      // Add if not there (Toggle on)
      return [...prev, product];
    });
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
