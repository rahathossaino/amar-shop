import React from 'react'
import { Routes,Route } from "react-router-dom";
import { AppProvider } from "../context/productcontext";
import { FilterProvider } from "../context/filterContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from '../Home';
import About from '../About';
import Products from '../Products';
import Contact from '../Contact';
import SingleProduct from '../SingleProduct';
import Cart from '../Cart';
import ErrorPage from '../ErrorPage';
import { CartProvider } from '../context/cartContext';

const UserLayout = () => {
  return (
    <AppProvider>
        <FilterProvider>
          <CartProvider>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </CartProvider>
        </FilterProvider>
    </AppProvider>
  )
}

export default UserLayout;