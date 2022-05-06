import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Blog from "./Components/Blog/Blog";
import Stocklist from "./Components/Stocklist/Stocklist";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stocklist" element={<Stocklist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
