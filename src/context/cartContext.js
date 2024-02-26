import { createContext, useContext } from "react";

const cartContext=createContext();


const CartProvider=({children})=>{
    <cartContext.Provider>
        {children}
    </cartContext.Provider>
}
const useCartContext=()=>{
    return useContext(cartContext);
}

export {CartProvider,useCartContext}