import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';
import axios from "axios";


const cartApi='';
const cartContext=createContext();

const CartProvider=({children})=>{
    const initialState={
        cartItem:[]
    }
    const{state,dispatch}=useReducer(reducer,initialState);
    const getCartItems=async (url)=>{
        const res=await axios.get(url);
        const items=await res.data;
        dispatch({type:'SET_CART_ITEM',payload:items})
    }
    useEffect(()=>{
        getCartItems(cartApi);
    });
    <cartContext.Provider value={{...state}}>
        {children}
    </cartContext.Provider>
}
const useCartContext=()=>{
    return useContext(cartContext);
}

export {CartProvider,useCartContext};