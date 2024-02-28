import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import styled from 'styled-components';
import { FaAws } from "react-icons/fa";
import { AiOutlineAmazon } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import { FaEbay } from "react-icons/fa";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>Trusted By 500+ Companies</h3>
        <div className="brand">
          <FaAws className='logo'/>
          <AiOutlineAmazon className='logo'/>
          <FaEbay className='logo'/>
          <SiFlipkart className='logo'/>
          <TbTruckDelivery className='logo'/>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
  padding:5rem 0 7rem 0;
  background:${({theme})=>theme.colors.bg};
  .container {
    .brand{
      padding-top:2rem;
      display:flex;
      justify-content:space-between;
    }
  }
  .logo{
    height:10rem;
    width:10rem; 
  }
  h3{
    text-align:center;
    margin-top:1.4rem;
    font-size:2rem;
    font-weight:bold;
  }
`;
export default Trusted;