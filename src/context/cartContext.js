import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';
import axios from "axios";

const cartContext = createContext();
const cartApi = '';
const initialState = {
    cartItem: []
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
    const removeItem=(id)=>{
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id });

    }
    useEffect(() => {
        getCartItems(cartApi);
    }, []);

    return (
        <cartContext.Provider value={{ ...state, removeItem}}>
            {children}
        </cartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(cartContext);
};

export { CartProvider, useCartContext };
