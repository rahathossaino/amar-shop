import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/FilterProductReducer';
import { useProductContext } from './productcontext';



const filterContext=createContext();

const initialState={
    filter_data:[],
    all_data:[],
    grid_view:true
}

const FilterProvider = ({children}) => {
    const {product}=useProductContext();
    const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
        dispatch({type:'LOAD_FILTER_DATA',payload:product});
    },[product])
    const setGridView=()=>{
      dispatch("SET_GRIDVIEW");
    }
  return (
    <filterContext.Provider value={{...state,setGridView}}>{children}</filterContext.Provider>
  )
}

export const useFilterContext=()=>{
    return useContext(filterContext);
}
export default FilterProvider; 