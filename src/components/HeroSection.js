import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './../styles/Button'

 const HeroSection = ({myData}) => {
    
    const {name}=myData;
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Wellcome to</p>
                    <h1>{name}</h1>
                    <p>This HTML file is a template.If you open it directly in the browser, you
                         will see an empty page.You can add webfonts, meta tags, or analytics to 
                         this file.The build step will place the bundled scripts into the  tag.To be
                         gin the development, run `npm start` or `yarn start`.To create a
                    </p>
                    <NavLink>
                        <Button>
                            shop now
                        </Button>
                    </NavLink>
                </div>
                <div className='hero-section-image'>
                    <figure>
                        <img src='images/hero.jpg' alt="thapa store" className='img-style'/>
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
} 

const Wrapper=styled.section`
    .grid {
       display: grid;
       gap: 9rem;
    }
  
    .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
    }
    padding:12rem 0;
    img{
        min-width:10rem;
        height:10rem;
    }
    .hero-section-data{
        p{
            margin:2rem 0;
        }
        h1{
            text-transform:capitalize;
            font-weight:bold;
        }
        .intro-data{
            margin-bottom:0;
        }
    }
    .hero-section-image{
        height:auto;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center
    }
    figure{
        position:relative;
        &::after{
            content:"";
            height:80%;
            width:60%;
            background-color:rgba(81,56,238,0.4);
            position:absolute;
            left:50%;
            top:-5rem;
            z-index:-1;
        }
    }
    .img-style{
        height:auto;
        width:100%;
    }
    @media(max-width: ${({theme})=>theme.media.mobile}){
        .grid{
            gap:10rem;
        }
        figure::after{
            content:"";
            height:100%;
            width:50%;
            position:absolute;
            left:0;
            top:10%;
            background-color:rgba(81,56,238,0.4);
        }
    }
`;
export default HeroSection;
