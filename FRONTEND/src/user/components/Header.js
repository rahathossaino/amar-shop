import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import Navbar from './Navbar';

const Header = () => {
  return (
    <Mainheader className='header'>
        <NavLink to='/'>
              <div className="logo">
                <h3>amarshop</h3>
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
    h3{
      color:#6439ff;
      display:inline;
      font-size:3.4rem;
      padding:0 0.5rem;
    }  
  }
 `;
export default Header