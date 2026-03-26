import React from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import "../../styles/App.css";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
