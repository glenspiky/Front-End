import { Category } from "../../components/categories/Category";
import { TopSellers } from "../../components/topSellers/TopSellers";
import { Products } from "../../components/Products/Products";
import { Subscribe } from '../../components/Subscribe/Subscribe';

export const Home = () => {
 
  return (
    <div>
      <Category></Category>
      <TopSellers></TopSellers>
      <Products></Products>
    </div>
  );
};
