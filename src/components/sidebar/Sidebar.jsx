import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
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
    const [isHovered, setIsHovered] = useState(false);

    return (
      <ul className="sidebar-lists">
<li><Link to="/"><MdSpaceDashboard style={{color:"rgb(186, 91, 250)"}}/>  <span>Dashboard</span></Link></li>
<li><Link to="/drivers"><FaRedRiver style={{color:"rgb(186, 91, 250)"}}/>  <span>Drivers</span></Link></li>
<li><Link to=""><LuWarehouse style={{color:"rgb(186, 91, 250)"}}/>  <span>Stock Material</span></Link></li>
<li><Link to=""><HiMiniWrenchScrewdriver style={{color:"rgb(186, 91, 250)"}}/>  <span>Maintenance</span></Link></li>
<li><Link to=""><FaFill style={{color:"rgb(186, 91, 250)"}}/>  <span>Fuel Request</span></Link></li>
<li onClick={() => setIsHovered(!isHovered)} ><FaTruckMoving style={{color:"rgb(186, 91, 250)"}}/> <span>Vehicles</span></li>
        {isHovered && (
          <ul className="vehicle-list" onClick={() => setIsHovered(!isHovered)}>
          <li><Link to=""><FaTruck style={{color:"rgb(186, 91, 250)"}}/>  <span>Isuzu</span></Link></li>
          <li><Link to="/vehicles"><TbRvTruck style={{color:"rgb(186, 91, 250)"}}/>  <span>Sino Truck</span></Link></li>
          <li><Link to="/dolphin"><FaShuttleVan style={{color:"rgb(186, 91, 250)"}}/>  <span>Dolphine</span></Link></li>
          <li><Link to=""><FaMotorcycle style={{color:"rgb(186, 91, 250)"}}/>  <span>Motercycle</span></Link></li>
          </ul>
        )}
      </ul>
    );
  
}

export default Sidebar