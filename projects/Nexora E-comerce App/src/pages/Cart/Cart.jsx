import Footer from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Cart.css";
import { Cart } from "../../components/Cart/Cart";
import React from "react";

export const Cart = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Cart/>
      <Footer></Footer>
    </div>
  );
};
