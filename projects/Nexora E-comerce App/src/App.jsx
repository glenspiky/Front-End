import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { CartPage } from './pages/Cart/CartPage';
import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { SearchResults } from "./pages/SearchResults/SearchResults";
function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <Navbar></Navbar>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />{" "}
          <Route path="/product/:id" element={<ProductDetails />} />{" "}
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
