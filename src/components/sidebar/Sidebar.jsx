import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {useState,useRef} from 'react'
import {MdSpaceDashboard} from 'react-icons/md'
import {FaTruckMoving} from 'react-icons/fa'
import {LuWarehouse} from 'react-icons/lu'
import {FaRedRiver} from 'react-icons/fa'
import {HiMiniWrenchScrewdriver} from 'react-icons/hi2'
import {FaTruck} from 'react-icons/fa'
import {FaShuttleVan} from 'react-icons/fa'
import {FaFill} from 'react-icons/fa'
import {TbRvTruck} from 'react-icons/tb'
import {FaMotorcycle} from 'react-icons/fa'
function Sidebar() {
function setIsHovered(){
  console.log("dd")
}
  const [active,setactive]=useState("nav_menu");
  const [isHovered,ssetactive]=useState(false);
    const [toggleIcon,setToggleIcon]=useState("nav_toggler")

    const navToggle=()=>{
        active==="nav_menu"? setactive("nav_menu nav_active"):setactive("nav_menu")
    toggleIcon==="nav_toggler"?setToggleIcon("nav_toggler toggle"):setToggleIcon("nav_toggler")
    }
    return (
      <div className='nav'>
      <ul className={active} >
<li><Link to="/"><MdSpaceDashboard  className='sidebar-icons'  style={{color:"rgb(186, 91, 250)"}}/>  <span>Dashboard</span></Link></li>
<li><Link to="/drivers"><FaRedRiver  className='sidebar-icons' style={{color:"rgb(186, 91, 250)"}}/>  <span>Drivers</span></Link></li>
<li><Link to=""><LuWarehouse className='sidebar-icons'  style={{color:"rgb(186, 91, 250)"}}/>  <span>Stock Material</span></Link></li>
<li><Link to=""><HiMiniWrenchScrewdriver  className='sidebar-icons' style={{color:"rgb(186, 91, 250)"}}/>  <span>Maintenance</span></Link></li>
<li><Link to=""><FaFill  className='sidebar-icons' style={{color:"rgb(186, 91, 250)"}}/>  <span>Fuel Request</span></Link></li>
<li onClick={() => ssetactive(!isHovered)} ><FaTruckMoving  className='sidebar-icons' style={{color:"rgb(186, 91, 250)"}}/> <span>Vehicles</span></li>
        {isHovered && (
          <ul className="vehicle-list" onClick={() => ssetactive(!isHovered)}>
          <li><Link to=""><FaTruck style={{color:"rgb(186, 91, 250)"}}/>  <span>Isuzu</span></Link></li>
          <li><Link to="/vehicles"><TbRvTruck style={{color:"rgb(186, 91, 250)"}}/>  <span>Sino Truck</span></Link></li>
          <li><Link to="/dolphin"><FaShuttleVan style={{color:"rgb(186, 91, 250)"}}/>  <span>Dolphine</span></Link></li>
          <li><Link to=""><FaMotorcycle style={{color:"rgb(186, 91, 250)"}}/>  <span>Motercycle</span></Link></li>
          </ul>
        )}
      </ul>
      
      <div onClick={navToggle} className={toggleIcon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>

                </div>
      </div>
    );
  
}

export default Sidebar