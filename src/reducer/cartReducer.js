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

    default:
        return{
            ...state,
        }
  }
}

export default cartReducer;