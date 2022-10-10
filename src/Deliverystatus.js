import React from 'react';
import './Deliverystatus.css';

function Deliverystatus({Icon,title,subtitle,color}) {
  return (
    <div className="delivery">
        <div>
<Icon style={{color:color}}/>
        </div>
        <div className="delivery_cards">
            <h4 className="delivery_name">{title}</h4>
            <h5 className="delivery_subtitle">{subtitle}</h5>
        </div>
    </div>
  )
}

export default Deliverystatus