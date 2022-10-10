import React from 'react'
import './Deliveryoption.css'

function Deliveryoption({title,Icon,color,subtitle}) {
  return (
    <div className="delivery_card">
    <h4>{title}</h4>
    <div className="delivery_status">
     <Icon  style={{ color: color,fontSize:'8px' }} />
      <h6>{subtitle}</h6>
    </div>
    </div>
  )
}

export default Deliveryoption;

