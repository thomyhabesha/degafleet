import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {useState,useRef} from 'react'
import {MdSpaceDashboard} from 'react-icons/md'
import {FaTruckMoving} from 'react-icons/fa'
import {LuWarehouse} from 'react-icons/lu'
import {FaRedRiver} from 'react-icons/fa'
import {HiMiniWrenchScrewdriver} from 'react-icons/hi2'
import {FaRegUserCircle} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'
import {FaShuttleVan} from 'react-icons/fa'
import {FaFill} from 'react-icons/fa'
import {TbRvTruck} from 'react-icons/tb'
import {FaMotorcycle} from 'react-icons/fa'
import { CiGps } from "react-icons/ci";
import { LuMilestone } from "react-icons/lu";
import logo from '../../assets/companylogo.png'
import { MdFormatListNumbered } from "react-icons/md";

function Sidebar() {
function setIsHovered(){
  console.log("dd")
}
  const [active,setactive]=useState("nav_menu");

  const [isHovered,ssetactive]=useState(false);
  const [fuelisHovered,fuelssetactive]=useState(false);

    const [toggleIcon,setToggleIcon]=useState("nav_toggler")

    const navToggle=()=>{
        active==="nav_menu"? setactive("nav_menu nav_active"):setactive("nav_menu")
    toggleIcon==="nav_toggler"?setToggleIcon("nav_toggler toggle"):setToggleIcon("nav_toggler")
    }
    return (
      <div className='nav'>
        
      <ul className={active} >
        <li><img src={logo}/></li>
<li><Link to="/"><MdSpaceDashboard  className='sidebar-icons'  style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Dashboard</span></Link></li>
<li><Link to="/drivers"><FaRedRiver  className='sidebar-icons' style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Driver managment</span></Link></li>
<li><Link to=""><LuWarehouse className='sidebar-icons'  style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Stock Material</span></Link></li>
<li><Link to=""><HiMiniWrenchScrewdriver  className='sidebar-icons' style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Maintenance</span></Link></li>
<li onClick={() => fuelssetactive(!fuelisHovered)}><FaFill  className='sidebar-icons' style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Fuel managment</span></li>
   {fuelisHovered && (
          <ul className="vehicle-list" onClick={() => fuelssetactive(!fuelisHovered)}>
          <li><Link to="/fuelmng"><FaFill  className='sidebar-icons' style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Fuel Form</span></Link></li>
          <li><Link to="/fueltable"><MdFormatListNumbered style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Fuel Refill table</span></Link></li>
         </ul>
        )}


<li onClick={() => ssetactive(!isHovered)} ><FaTruckMoving  className='sidebar-icons' style={{color:"rgba(50, 46, 251, 0.676)"}}/> <span>Vehicle managment</span></li>
        {isHovered && (
          <ul className="vehicle-list" onClick={() => ssetactive(!isHovered)}>
          <li><Link to=""><FaTruck style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Isuzu</span></Link></li>
          <li><Link to="/vehicles"><TbRvTruck style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Sino Truck</span></Link></li>
          <li><Link to="/dolphin"><FaShuttleVan style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Dolphine</span></Link></li>
          <li><Link to=""><FaMotorcycle style={{color:"rgba(50, 46, 251, 0.676)"}}/>  <span>Motercycle</span></Link></li>
          </ul>
        )}
        <li><Link to="" style={{color:"rgb(110, 108, 108)"}}> <CiGps style={{color:"rgba(50, 46, 251, 0.676)"}}/><span>Gps tracking</span> </Link></li>
        <li><Link to="" style={{color:"rgb(110, 108, 108)"}}> <LuMilestone style={{color:"rgba(50, 46, 251, 0.676)"}}/><span>Milage Report</span> </Link></li>
        <li><Link to="" style={{color:"rgb(110, 108, 108)"}}> <FaRegUserCircle style={{color:"rgba(50, 46, 251, 0.676)"}}/><span>Account</span> </Link></li>
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