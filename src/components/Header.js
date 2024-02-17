import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import Navbar from './Navbar';

const Header = () => {
  return (
    <Mainheader className='header'>
        <NavLink to='/'>
              <div className="logo">
                <h3 id="amar">Amar</h3>
                <h3>Shop</h3>
              </div>
        </NavLink>
        <Navbar/>
    </Mainheader>
  )
}
const Mainheader=styled.header`
  background-color:${({theme})=>theme.colors.bg};
  padding:0 4.8rem;
  height:10rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;
  .logo{
    border:5px solid ${({theme})=>theme.colors.helper};
    h3{
      display:inline;
      font-size:3.4rem;
      padding:0 0.5rem;
    }  
  }
  #amar{
    background-color:${({theme})=>theme.colors.helper};
    color:white;
  }
 `;
export default Header