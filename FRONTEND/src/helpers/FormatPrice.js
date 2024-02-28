import React from 'react'

const FormatPrice = ({price}) => {
  return  Intl.NumberFormat("bn-BD",{
        style:'currency',
        currency:'BDT'
    }).format(price/100); 
}

export default FormatPrice;