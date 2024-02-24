import React from 'react'
import useFilterContext from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const [products,grid_view]=useFilterContext();
  if(grid_view===true){
    return <GridView products={products}/>
  }
  if(grid_view===false){
    return <ListView products={products}/>
  }
}

export default ProductList