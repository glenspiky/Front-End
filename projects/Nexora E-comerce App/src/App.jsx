import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />{" "}
      </Routes>
    </>
  );
}

export default App;
