import React from 'react'

const FormatPrice = ({price}) => {
  return  Intl.NumberFormat("bn_BD",{
        style:'currency',
        currency:'BDT'
    }).format(price/100); 
}

export default FormatPrice;