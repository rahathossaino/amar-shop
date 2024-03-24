import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/FilterProductReducer";
import axios from "axios";

const FilterContext = createContext();

const categoryApi='http://127.0.0.1:8000/api/categories';
const companyApi='';
const colorApi='';
const maxpriceApi='';
const minpriceApi='';
const priceApi='';



const initialState = {
  filter_products: [],
  all_products: [],
  categories:[],
  colors:[],
  companies:[],
  price:0,
  maxprice:0,
  minPrice:0,
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
  },
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  const getCategory=async (url)=>{
    const res=await axios.get(url);
    const categories=await res.data.categories;
    dispatch({ type: "SET_CATEGORIES" ,payload:categories});
  }
  const getCompany=async (url)=>{
    const res=await axios.get(url);
    const companies=await res.data;
    dispatch({ type: "SET_COMPANIES" ,payload:companies});
  }
  const getColors=async (url)=>{
    const res=await axios.get(url);
    const colors=await res.data;
    dispatch({ type: "SET_COLORS" ,payload:colors});
  }
  const getPrice=async (url)=>{
    const res=await axios.get(url);
    const price=await res.data;
    dispatch({ type: "SET_PRICE" ,payload:price});
  }
  const getMaxPrice=async (url)=>{
    const res=await axios.get(url);
    const max=await res.data;
    dispatch({ type: "SET_MAX_PRICE" ,payload:max});
  }
  const getMinPrice=async (url)=>{
    const res=await axios.get(url);
    const min=await res.data;
    dispatch({ type: "SET_MIN_PRICE" ,payload:min});
  } 
  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS",payload:products });
  }, [state.sorting_value]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(()=>{
     getCategory(categoryApi); 
     getCompany(companyApi);
     getColors(colorApi);
     getMaxPrice(maxpriceApi);
     getMinPrice(minpriceApi);
     getPrice(priceApi)
  },[]);
// console.log(state.categories);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};