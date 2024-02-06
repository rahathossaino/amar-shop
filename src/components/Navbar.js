import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <Nav>
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li>
                    <NavLink to="/cart">
                    <FiShoppingCart />
                    </NavLink>
                </li>

            </ul>
        </div>
    </Nav>
  )
}
const Nav=styled.nav``;
export default Navbar