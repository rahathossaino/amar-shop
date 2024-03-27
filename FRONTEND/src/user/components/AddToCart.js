import { useState } from "react";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/Button";
import toast from "react-hot-toast";
import axios from "axios";
import User from './User';



const AddToCart = ({ product }) => {
  const { id, qty } = product;
  const navigate=useNavigate();
  const [amount, setAmount] = useState(1);
  const {getToken}=User();
  const token = getToken(); 

  
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};
  const setIncrease = () => {
    amount < qty ? setAmount(amount + 1) : setAmount(qty);
  };
  const addToCart=async()=>{
    if(token==undefined){
      navigate('/account/login');
      return false
    }
    const load=toast.loading('Addidng to cart...');
    try{
      const res=await axios.post('http://127.0.0.1:8000/api/account/cart/store/'+id,{'qty':amount},config)
      console.log(res);
      navigate('/cart');
      toast.dismiss(load);
      toast.success(res.data.message)
    }catch(error){
      toast.dismiss(load);
        if (error.response) {
            console.error(error.response.data); 
            console.error(error.response.status); 
            console.error(error.response.headers); 
            toast.error(error.response.data.message || 'Something went wrong. Please try again!');
        } else if (error.request) {
            console.error(error.request);
            toast.error('No response received from the server. Please try again later.');
        } else {
            console.error('Error', error.message);
            toast.error('An error occurred while processing your request. Please try again.');
        }
        console.error(error.config);

    }
  }
  return (
    <Wrapper>
      {/* <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div> */}

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Button className="btn" onClick={addToCart}>Add To Cart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
