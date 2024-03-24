import React from 'react'
import { Routes,Route } from "react-router-dom";
import { AppProvider } from "../user/context/productcontext";
import { FilterProvider } from "../user/context/filterContext";
import Header from "../user/components/Header";
import Footer from "../user/components/Footer";
import Home from '../user/Home';
import About from '../user/About';
import Products from '../user/Products';
import Contact from '../user/Contact';
import SingleProduct from '../user/SingleProduct';
import Cart from '../user/Cart';
import ErrorPage from '../ErrorPage';
import { CartProvider } from '../user/context/cartContext';
import {GlobalStyle} from '../GlobalStyle';
import SignIn from '../user/components/SignIn';
import SignUp from '../user/components/SignUp';
import User from '../user/components/User';
import { Navigate } from 'react-router-dom';
import {AuthenticatedRoutes} from '../user/components/AuthenticatedRoutes';

const UserLayout = () => {
  const {getToken}=User();
  return (
    <AppProvider>
        <FilterProvider>
          <CartProvider>
            <GlobalStyle/>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path='/account/sign-up' element={<SignUp/>}/>
              <Route path='/account/login' element={<SignIn/>}/>
              <Route path="/account/*" element={getToken() ? <AuthenticatedRoutes /> : <Navigate to="/account/login" />} />
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </CartProvider>
        </FilterProvider>
    </AppProvider>
  )
  
}

export default UserLayout;