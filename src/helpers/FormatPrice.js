import React from 'react'

const FormatPrice = ({price}) => {
  return  Intl.NumberFormat("en_IN",{
        style:'currency',
        currency:'INR'
    }).format(price/100); 
}

export default FormatPrice;