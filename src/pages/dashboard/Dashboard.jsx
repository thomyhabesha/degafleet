import React from 'react'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import './Dashboard.css'
import costImg from '../../assets/costimg.png'
import fuelImg from '../../assets/fuelimg.png'
import {FaRegUserCircle} from 'react-icons/fa'
import degaLogo from '../../assets/Dega-Water-Logo-removebg-preview.png'
import Sidebar from '../../components/sidebar/Sidebar'
function Dashboard() {




  return (
    <div className='dashboard '>
      <div className="nav-bar">
        <img src={degaLogo}/>
        <Link to=""><FaRegUserCircle size={30}/></Link>
      </div>
<div className="dashboard_contents">


<Sidebar/>
      <main className="dashboard-main">
        <div>
<img src={costImg} />
</div>
<div className="dashboard_rightSection">

  <div className="idle_vehicles">
<h3><Link to="/dayIdleVehicles">Day Idle Vehicles</Link></h3>
<p>3 Vehicles</p>
  </div>

<div className="OverSpeedReport">
<h3><Link to="/overspeedreport">OverSpeed Report</Link></h3>
<p>12 Reports</p>
  </div>

  <div className="GoteraWarehouse">
<h3><Link to="/goterawarehouseVehicles">Gotera Warehouse</Link></h3>
<p>2 Vehicles</p>
  </div>


  
  <ul className="dashboard_rightSection-vehicleStatus">
  <h3>Vehicle status</h3>
    <li>Active <span style={{backgroundColor:"green"}}>60</span></li>
    <li>Maintenance <span style={{backgroundColor:"rgba(248, 248, 179, 0.904)"}}>8</span></li>
    <li>Out of service <span style={{backgroundColor: "red"}}>9</span></li>
  </ul>

</div>
<div className='fuel-calc'>
<img src={fuelImg} />
</div>
      </main>
      {/* <hr className='line-last'/> */}
    </div>
    
    </div>
  )
}

export default Dashboard