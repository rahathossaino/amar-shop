import React from 'react';
import styled from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";



const Services = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-three-column'>
                <div className='service-1'>
                    <div>
                        <TbTruckDelivery className='icon'/>
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>
                <div className='service-2'>
                    <div className='service-column-2'>
                        <div>
                            <MdSecurity className='icon'/>
                            <h3>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className='service-column-2'>
                        <div>
                            <GiReceiveMoney className='icon'/>
                            <h3>Money-back Guaranteed</h3>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='service-3'>
                    <div>
                        <RiSecurePaymentLine className='icon'/>
                        <h3>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>

        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    padding:9rem 0;
    .grid{
        gap:4.8rem;
    }
    h3{
        margin-top:1.4rem;
        font-size:2rem;
    }
    .service-1,
    .service-2,
    .service-3{
        width:auto;
        height:30rem;
        display:flex;
        flex-direction:column;
        align-content:center;
        text-align:center;
        background:${({theme})=>theme.colors.bg};
        justify-content:center;
        border-radius:2rem;
        box-shadow:rgba(0,0,0,0.05) 0px 1px 2px 0;
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:1rem;
        }
    }
    .service-2{
        gap:4rem;
        background-color:transparent;
        box-shadow:none;
        .service-column-2{
            display:flex;
            flex:1;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            background:${({theme})=>theme.colors.bg};
            border-radius:2rem;
            box-shadow:rgba(0,0,0,0.05) 0px 1px 2px 0;
            div{
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:center;
                gap:1rem;
            }
        }
    }
    .icon{
        height:8rem;
        width:8rem;
        padding:2rem;
        border-radius:50%;
        background-color:#fff;
        color:#5138ee;
    }
`;
export default Services