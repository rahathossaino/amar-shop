const ProductReducer=(state,action)=>{
    switch(action.type){
        case 'SET_LOADING':
            return{
                ... state,
                isLoading:true
            }
        case 'SET_API_DATA':
            const products=action.payload.filter((element)=>{
                return element.featured===true;
            })
            return {
                ... state,
                isLoading:false,
                products:action.payload,
                featuredProducts:products
            }
        case 'SET_ERROR':
            return {
                ... state,
                isError:true,
                isLoading:false
            }   
    }
}
export default ProductReducer;