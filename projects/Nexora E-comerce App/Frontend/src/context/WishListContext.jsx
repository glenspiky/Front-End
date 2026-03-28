import {  createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishlist] = useState("hello");
  return (
    <WishlistContext.Provider value={{ wishList, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
// export const useWishlist = () => useContext(WishlistContext);
