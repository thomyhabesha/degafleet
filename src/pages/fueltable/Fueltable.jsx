import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Fuelmngdata from '../../data/Fuelmngdata'
import FueltableData from '../../data/FueltableData'
import fuelBgImg from '../../assets/dashbg4.png'
import '../Itemlists.css'
import './Fueltable.css'

function Fueltable() {
  return (
    <div className='dashboard'>
    
 <div className="dashboard_contents"style={{background:`url(${fuelBgImg})`, backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<Sidebar/>
<div className="fueltablepage"  >
    <h2>Fuel <span>managment table</span></h2>
<table>
    <tr>
    {
        Fuelmngdata.map(items=>{
            return(
                    <th>{items}</th>
                    )
                })
            }
            </tr>
    {
    FueltableData.map((items, index) => (
      
            <tr key={index}>
                <td>{items.Dateofrefuel}</td>
                <td>{items.PolateNo}</td>
                <td>{items.StartMileage}</td>
                <td>{items.EndmilAge}</td>
                <td>{items.MilageCovered}</td>
                <td>{items.PriceLitter}</td>
                <td>{items.RefueledAmount}</td>
                <td>{items.ActualKmpl}</td>
                <td>{items.MinimumStand}</td>
                <td>{items.AmountBirr}</td>
                
            </tr>
        ))
    

}
</table>
</div>

    </div>
    </div>
  )
}

export default Fueltable