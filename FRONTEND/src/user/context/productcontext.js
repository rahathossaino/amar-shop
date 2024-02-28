import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/productReducer";

const AppContext=createContext();

const API="";


const AppProvider=({children})=>{
    const initialState={
        isLoading:false,
        isError:false,
        products:[],
        featuredProducts:[],
        isSingleLoading:false,
        singleProduct:{},
        singleError:false
    }
    const [state,dispatch]=useReducer(ProductReducer,initialState);

    const getProducts=async (url)=>{
        dispatch({type:'SET_LOADING'});
        try{
            const res=await axios.get(url);
            const products=await res.data;
            dispatch({type:'SET_API_DATA',payload:products})
        }catch(error){
            dispatch({type:'SET_ERROR'})
        }
    }
    const getSingleProduct=async (url)=>{
        dispatch({type:'SET_SINGLE_LOADING'});
        try{
            const res=await axios.get(url);
            const product=await res.data;
            dispatch({type:'SET_SINGLE_API_DATA',payload:product})
        }catch(error){
            dispatch({type:'SET_SINGLE_ERROR'})
        }
    }

    useEffect(()=>{
        getProducts(API);
    },[]);
    return <AppContext.Provider value={{...state , getSingleProduct}}>{children}</AppContext.Provider>;
}
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,useProductContext};