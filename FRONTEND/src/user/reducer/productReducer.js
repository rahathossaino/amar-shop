const ProductReducer=(state,action)=>{
    switch(action.type){
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true
            }
        case 'SET_API_DATA':
            const products = Array.isArray(action.payload) ? action.payload.filter(curElem => curElem.featured === true) : [];
            return {
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProducts:products
            }
        case 'SET_ERROR':
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        case 'SET_SINGLE_LOADING':
            return {
                ...state,
                isSingleLoading:true
            }
        case 'SET_SINGLE_API_DATA':
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload,
            }
        case 'SET_SINGLE_ERROR' :
            return{
                ...state,
                isSingleLoading:false,
                isSingleError:true
            } 
        default:
            return{
                ...state
            }       
    }
}
export default ProductReducer;