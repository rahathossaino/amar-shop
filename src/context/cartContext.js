import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';
import axios from "axios";

const cartContext = createContext();
const cartApi = '';
const initialState = {
    cartItem: [],
    total_price:'',
    shipping_fee:''
};

const CartProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCartItems = async (url) => {
        try {
            const res = await axios.get(url);
            const items = res.data;
            dispatch({ type: 'SET_CART_ITEM', payload: items });
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
      };
    
      const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
      };
    const removeItem=(id)=>{
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
    }
    const clearCart = () => {
        dispatch({ type: "SET_CART_CLEAR" });
      };
      
    useEffect(() => {
        getCartItems(cartApi);
    }, []);

    return (
        <cartContext.Provider value={{ ...state, removeItem, clearCart,setDecrease,setIncrement}}>
            {children}
        </cartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(cartContext);
};

export { CartProvider, useCartContext };
