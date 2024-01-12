import React from 'react'
import Overspeedreportlist from '../../data/Overspeedreport'
import {FaPlusCircle} from 'react-icons/fa'
import {FaRegUserCircle} from 'react-icons/fa'
import Sidebar from '../../components/sidebar/Sidebar'
import '../Itemlists.css'

function Overspeedreport() {
  return (
    <div className='dashboard'>
         <div className="nav-bar">
        <FaRegUserCircle size={30}/>
      </div>
      <div className="dashboard_contents">
     <Sidebar/>
<div className='listAdd-and_list'>

<div className="add-listinfo">
    <h2>OverSpeed report</h2>
    <div><FaPlusCircle size={23} style={{color:"black"}}/> <span>Add report</span></div>
</div>

<div className="items-list">
    <div className="search-item">
        <h2>Search:<span> <input type="text" /></span></h2>
        
    </div>
    <table className="items-listtable">
        <tr>
            <th>S.No</th>
            <th>Driver</th>
            <th>Vehicle Name</th>
            <th>PLATE No</th>
            <th>Speed</th>
            <th>Date</th>
        </tr>
        {
            Overspeedreportlist.map(items=>{
                return(
                    <tr>
                        <td>{items.id}</td>
                        <td>{items.driver}</td>
                        <td>{items.name}</td>
                        <td>{items.platenumer}</td>
                        <td>{items.speed}</td>
                        <td>{items.date}</td>
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

export default Overspeedreport