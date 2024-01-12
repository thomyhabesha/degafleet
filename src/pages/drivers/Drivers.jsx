import React from 'react'
import Overspeedreport from '../../data/ActiveDriverlist'
import {FaPlusCircle} from 'react-icons/fa'
import {FaRegUserCircle} from 'react-icons/fa'
import Sidebar from '../../components/sidebar/Sidebar'
import '../Itemlists.css'

function Drivers() {
  return (
    <div className='dashboard'>
         <div className="nav-bar">
        <FaRegUserCircle size={30}/>
      </div>
      <div className="dashboard_contents">
     <Sidebar/>
<div className='listAdd-and_list'>

<div className="add-listinfo">
    <h2>Driver Informaion</h2>
    <div><FaPlusCircle size={23} style={{color:"black"}}/> <span>Add Driver</span></div>
</div>

<div className="items-list">
    <div className="search-item">
        <h2>Search:<span> <input type="text" /></span></h2>
        
    </div>
    <table className="items-listtable">
        
    <th>S.No</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>ID</th>
            <th>Data of join</th>
            <th>Is Avtive</th>
            <th>Reason of Inactivity</th>
        {
            Overspeedreport.map(items=>{
                return(
                    <tr>
                       <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.mobile}</td>
                        <td>{items.idNumber}</td>
                        <td>{items.dateofjoin}</td>
                        <td>{items.isActive}</td>
                        <td>{items.ReasonOfInavctivity && items.ReasonOfInavctivity}</td>
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

export default Drivers