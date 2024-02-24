import React from 'react'
import useFilterContext from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const [products,grid_view]=useFilterContext();
  if(grid_view===true){
    <GridView products={products}/>
  }
  if(grid_view===false){
    <ListView products={products}/>
  }
}

export default ProductList