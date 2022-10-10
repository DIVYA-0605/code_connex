import React from 'react'
import Sidebaricon from './Sidebaricon'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
       
         <Sidebaricon Icon={DashboardOutlinedIcon} title="Dashboard"/>
        <Sidebaricon Icon={LocalGroceryStoreOutlinedIcon} title="Stores"/>
        <Sidebaricon Icon={PeopleOutlinedIcon} title="Users"/>
        <Sidebaricon Icon={DvrOutlinedIcon} title="Orders"/>
      
       
       

        
    </div>
  )
}

export default Sidebar