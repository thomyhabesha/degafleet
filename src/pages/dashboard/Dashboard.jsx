import React from 'react'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import './Dashboard.css'
import costImg from '../../assets/costimg.png'
import fuelImg from '../../assets/fuelimg.png'
import {FaRegUserCircle} from 'react-icons/fa'
import { BiAnalyse } from "react-icons/bi";
import { TbMessageReport } from "react-icons/tb";
import Sidebar from '../../components/sidebar/Sidebar'
import dashImg from '../../assets/dashbg1.png'
function Dashboard() {




  return (
    <div className='dashboard' style={{background:`url(${dashImg})`, backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
     
<div className="dashboard_contents" >


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

  <div className="alert">
<h3><Link to="" >Notifications</Link>
        </h3>
<p>11 new reports</p>
  </div>

  <div className="Analysis">
<h3><Link to="" >Report & Analysis </Link>
        </h3>
<p> 5 new reports</p>
  </div>

  
  <ul className="dashboard_rightSection-vehicleStatus">
  <h3>Vehicle status</h3>
    <li>Active <span style={{backgroundColor:"rgb(130, 230, 131)"}}>60</span></li>
    <li>Maintenance <span style={{backgroundColor:"rgba(248, 248, 179, 0.904)"}}>8</span></li>
    <li>Out of service <span style={{backgroundColor: "rgba(244, 119, 100, 0.9)"}}>9</span></li>
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