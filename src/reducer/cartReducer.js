import React from 'react'

const cartReducer = ({state,action}) => {
  switch(action.type){
    case 'SET_CART_ITEM':
        return{
            ...state,
            cartItem:[...action.payload]
        }
    default:
        return{
            ...state,
        }
  }
}

export default cartReducer;