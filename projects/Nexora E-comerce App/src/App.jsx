import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { CartPage } from './pages/Cart/CartPage';
import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar";
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
        </Routes>
      </main>
      
        <Footer></Footer>
     
    </div>
  );
}

export default App;
