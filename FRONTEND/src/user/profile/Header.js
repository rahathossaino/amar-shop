import React from 'react'
import styled from 'styled-components'

const Header = ({data}) => {
  return (
    <Wrapper>
        <p className='main'>My Account</p>
        <p>/</p>
        <p>{data}</p>
    </Wrapper>
  )
}
const Wrapper=styled.section`
  display:flex;
  gap:1.5rem;
  padding:2rem 14rem;
  p{
    font-size:1.8rem;
    font-weight:500;
  }
  .main{
    color: rgb(238, 184, 35);
  }
`

export default Header