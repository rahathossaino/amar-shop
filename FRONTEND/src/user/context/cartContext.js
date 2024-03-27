import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';
import axios from "axios";
import User from "../components/User";






const cartContext = createContext();
const cartApi = 'http://127.0.0.1:8000/api/account/cart';
const initialState = {
    cartItem: [],
    total_price:'',
    shipping_fee:''
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {getToken}=User();
    const token = getToken(); 
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const getCartItems = async (url) => {
        try {
            const res = await axios.get(url,config);
            const items = res.data.cart_item;
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
