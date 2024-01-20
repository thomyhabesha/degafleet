
import React from 'react'
import IdleVehicles from '../../data/IdleVehicles'
import {FaPlusCircle} from 'react-icons/fa'
import {FaRegUserCircle} from 'react-icons/fa'
import Sidebar from '../../components/sidebar/Sidebar'
import '../Itemlists.css'

function dayIdleVehicles() {
  return (
    <div className='dashboard'>
         
      <div className="dashboard_contents">
     <Sidebar/>
<div className='listAdd-and_list'>

<div className="add-listinfo">
    <h2>Daily Idle Vehicles</h2>
    <div><FaPlusCircle size={23} style={{color:"black"}}/> <span>Add Vehicle</span></div>
</div>

<div className="items-list">
    <div className="search-item">
        <h2>Search:<span> <input type="text" /></span></h2>
        
    </div>
    <table className="items-listtable">
        <tr>
            <th>S.No</th>
            <th>Vehicle Name</th>
            <th>PLATE No</th>
            <th>Is Avtive</th>
        </tr>
        {
            IdleVehicles.map(items=>{
                return(
                    <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.platenumer}</td>
                        <td>{items.isActive}</td>
                    </tr>
                )
            })
        }
    </table>
</div>

</div>
    </div>
    </div>
  )
}

export default dayIdleVehicles