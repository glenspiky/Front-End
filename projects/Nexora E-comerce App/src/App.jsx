import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { CartPage } from './pages/Cart/CartPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />{" "}
      </Routes>
    </>
  );
}

export default App;
