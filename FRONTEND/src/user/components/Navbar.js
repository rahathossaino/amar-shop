import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu , CgClose } from "react-icons/cg";
import { Button } from '../../styles/Button';

const Navbar = () => {
  const [menuIcon,setMenuIcon]=useState();
  return (
    <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-lists'>
                <li ><NavLink to="/" className="navbar-link home-link">Home</NavLink></li>
                <li ><NavLink to="/about" className="navbar-link">About</NavLink></li>
                <li ><NavLink to="/products" className="navbar-link">Products</NavLink></li>
                <li ><NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
                <li>
                  <button className='btn'>
                    <NavLink to="/user/sign-in" className="navbar-link--btn">Log In</NavLink> 
                  </button>
                </li>
                <li >
                    <NavLink to="/cart" className="navbar-link cart-trolley--link">
                    <FiShoppingCart className="cart-trolley"/>
                    <p className="cart-total-item">10</p>
                    </NavLink>
                </li>

            </ul>
            <div className="mobile-navbar-btn">
              <CgMenu name="menu-outline" className='mobile-nav-icon' onClick={()=>setMenuIcon(true)}/>
              <CgClose name="close-outline" className='mobile-nav-icon close-outline' onClick={()=>setMenuIcon(false)}/>

            </div>
        </div>
    </Nav>
  )
}
const Nav=styled.nav`

.navbar-lists{
  display:flex;
  gap:3.8rem;
  align-items:center
}
.btn{
  padding:0 0.5rem;
  .navbar-link--btn{
    &:link,
    &:visited{
      display:inline-block;
      text-decoration:none;
      font-size:1.8rem;
      font-weight:500;
      text-transform:uppercase;
      color:${({theme})=>theme.colors.black};
      transition:color 0.3s linear
    }
    &:hover,
    &:active{
      color:gray;
    }
  }
}
.navbar-link{
  &:link,
  &:visited{
    display:inline-block;
    text-decoration:none;
    font-size:1.8rem;
    font-weight:500;
    text-transform:uppercase;
    color:${({theme})=>theme.colors.black};
    transition:color 0.3s linear
  }
  &:hover,
  &:active{
    color:${({theme})=>theme.colors.helper};
  }
}
  .cart-trolley--link{
    position:relative;
    .cart-trolley{
      position:relative;
      font-size:3.2rem;
    }
    .cart-total-item{
      width:2.4rem;
      height:2.4rem;
      position:absolute;
      background-color:${({theme})=>theme.colors.helper};
      color:#fff;
      border-radius:50%;
      display:grid;
      place-items:center;
      top:-20%;
      left:70%;

    }
  }
  .mobile-navbar-btn{
    display:none;
    background-color:transparent;
    cursor:pointer;
    border:none;
  }
   .mobile-nav-icon[name='close-outline']{
    display:none
   }
   .close-outline{
    display:none
  }
  @media (max-width: ${({theme})=>theme.media.mobile}){
    .mobile-navbar-btn{
      display:inline-block;
      z-index:9999;
      border:${({theme})=>theme.colors.black};
      .mobile-nav-icon{
        font-size:4.2rem;
        color:${({theme})=>theme.colors.black};
      }
    }
    .active .mobile-nav-icon{
      display:none;
      font-size:4.2rem;
      position:absolute;
      top:30%;
      right:10%;
      z-index:9999;
      color:${({theme})=>theme.colors.black};
    }
    .active .close-outline{
      display:inline-block;
    }
    .navbar-lists{
      width:100vw;
      height:100vh;
      position:absolute;
      top:0;
      left:0;
      background-color:#fff;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      visibility:hidden;
      opacity:0;
      transform:translateX(100%);
      transition:all 3s linear; 
    }
    .active .navbar-lists{
      visibility:visible;
      opacity:1;
      transform:translateX(0);
      transform-origin:right;
      transition:all 3s linear; 
      .navbar-link{
        font-size:4.2rem;
      }
    }
  }
}
`
export default Navbar