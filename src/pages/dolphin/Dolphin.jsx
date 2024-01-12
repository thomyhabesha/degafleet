import React from 'react'
import Dolphincars from '../../data/Dophincars'
import {FaPlusCircle} from 'react-icons/fa'
import {FaRegUserCircle} from 'react-icons/fa'
import Sidebar from '../../components/sidebar/Sidebar'
import '../Itemlists.css'

function Dolphin() {
  return (
    <div className='dashboard'>
         <div className="nav-bar">
        <FaRegUserCircle size={30}/>
      </div>
      <div className="dashboard_contents">
     <Sidebar/>
<div className='listAdd-and_list'>

<div className="add-listinfo">
    <h2>Vehicle Information</h2>
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
            <th>Insurance</th>
            <th>Is Avtive</th>
            <th>Fuel conumption</th>
        </tr>
        {
            Dolphincars.map(items=>{
                return(
                    <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.platenumer}</td>
                        <td>{items.insurance}</td>
                        <td>{items.isActive}</td>
                        <td>{items.fuelcons}</td>
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

export default Dolphin