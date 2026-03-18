import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Category } from "../../components/categories/Category";
import { TopSellers } from "../../components/topSellers/TopSellers";
import { Products } from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Category></Category>
      <TopSellers></TopSellers>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};
