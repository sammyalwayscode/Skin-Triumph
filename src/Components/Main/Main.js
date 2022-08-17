import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Blog from "../Blog/Blog";
import Stocklist from "../Stocklist/Stocklist";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
import Detail from "../DetailPage/Detail";
import Footer from "../Footer/Footer";
import Checkout from "../Checkout/Checkout";
import Review from "../Review/Review";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/stocklist" element={<Stocklist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/reviewdetails" element={<Review />} />
        <Route path="/product/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Main;
