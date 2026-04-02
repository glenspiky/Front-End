import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/Cart/CartPage";
import "./styles/App.css";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchResults from "./pages/SearchResults/SearchResults";
import Layout from "./components/Layout/Layout";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { WishListPage } from "./pages/wish-list/WishListPage";

function App() { 
  return (
    <Layout>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />{" "}
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
