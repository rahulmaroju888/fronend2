import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "../pages/Product";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Error from "../pages/Error";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RoutesPage() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RoutesPage;
