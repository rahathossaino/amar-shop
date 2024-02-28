import React from 'react'

const cartReducer = (state,action) => {
  switch(action.type){
    case 'SET_CART_ITEM':
        return{
            ...state,
            cartItem:[...action.payload]
        }
    case 'REMOVE_CART_ITEM':
        let updatedCart = state.cartItem.filter(
            (curItem) => curItem.id !== action.payload
          );
          return {
            ...state,
            cartItem: updatedCart,
          };
    case "SET_CART_CLEAR":
        return {
            ...state,
            cart: [],
          };
    case "CART_TOTAL_PRICE":
      let total_price = state.cart.reduce((initialVal, curElem) => {
            let { price, amount } = curElem;
      
            initialVal = initialVal + price * amount;
      
            return initialVal;
          }, 0);
      
          return {
            ...state,
            total_price:total_price
          };
    default:
        return{
            ...state,
        }
  }
}

export default cartReducer;