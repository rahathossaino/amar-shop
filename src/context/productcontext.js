import axios from "axios";
import { createContext, useEffect } from "react";

const AppContext=createContext();

const API="https://pujakaitem.com/api/products";


const AppProvider=({childern})=>{
    const getProducts=async (url)=>{
        const res=await axios.get(url);
        console.log(res);
        const products=await res.data;
    }

    useEffect(()=>{
        getProducts(API);
    },[]);
    return (<AppContext.Provider>{childern}</AppContext.Provider>)
}
export {AppProvider,AppContext};