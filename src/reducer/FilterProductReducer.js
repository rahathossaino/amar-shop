import React from 'react'

const FilterProductReducer = (state,action) => {
  switch(action.type){
    case "LOAD_FILTER_DATA":
        return{
            ...state,
            filter_data:action.payload,
            all_data:action.payload,
        }
    case "SET_GRIDVIEW":
        return{
            ...state,
            grid_view:true
        }
    default:
            return state;
  }
}

export default FilterProductReducer;