import React from 'react'
import Dolphincars from '../../data/Dophincars'
import {FaPlusCircle} from 'react-icons/fa'
import {FaRegUserCircle} from 'react-icons/fa'
import Sidebar from '../../components/sidebar/Sidebar'
import Fuelmngdata from '../../data/Fuelmngdata'
import fuelBgImg from '../../assets/dashbg4.png'
import '../Itemlists.css'
import './fuelmng.css'

function Fuelmng() {
  return (
    <div className='dashboard'>
    
 <div className="dashboard_contents"style={{background:`url(${fuelBgImg})`, backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<Sidebar/>
<div className="fuelformpage"  >
<div className="fuel-top-header">
    <h2>Fuel request and managment </h2>
    <h3 >Vehicle fuel refiling form</h3>
</div>

<form>
    {
        Fuelmngdata.map(items=>{
            return(
                <div className='formlists'>
                <p>{items}</p>
                <input type="text" />
                </div>
            )
        })
    }
    <input className="fuel-btn" type='submit' value="Add"/>
</form>
</div>
</div>
    </div>
  )
}

export default Fuelmng