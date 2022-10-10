import React from 'react'
 import "./Sidebaricon.css";

function Sidebaricon({ Icon, title, color }) {
  return (
    <div className="sidebar__icon">
    <Icon style={{ color: color }} />
    <h4>{title}</h4>
  </div>
  )
}

export default Sidebaricon