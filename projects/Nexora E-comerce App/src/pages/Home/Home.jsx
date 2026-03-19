import React from "react";
import { Category } from "../../components/categories/Category";
import { TopSellers } from "../../components/topSellers/TopSellers";
import { Products } from "../../components/Products/Products";

export const Home = () => {
  return (
    <div>
     
      <Category></Category>
      <TopSellers></TopSellers>
      <Products></Products>
      
    </div>
  );
};
