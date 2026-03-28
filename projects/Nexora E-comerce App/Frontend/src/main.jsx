import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import "./styles/variables.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishListContext.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>,
);
