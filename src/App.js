 import Dashboard from './pages/dashboard/Dashboard';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Vehicles from './pages/vehicles/Vehicles';
import DayIdleVehicles from './pages/dayIdleVehicles/DayIdleVehicles';
import GoterawarehouseVehicles from './pages/goteraWarehouse/Goterwarehouse';
import Overspeedreport from './pages/overspeedreport/Overspeedreport';
import Dolphin from './pages/dolphin/Dolphin';
import Drivers from './pages/drivers/Drivers';
import Login from './pages/login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
       <HashRouter>
<Routes>
        <Route excat path="/" element={<Dashboard/>} />
        <Route path="/vehicles" element={<Vehicles/>} />
        <Route path="/dayIdleVehicles" element={<DayIdleVehicles/>} />
        <Route path="/dolphin" element={<Dolphin/>} />
        <Route path="/drivers" element={<Drivers/>} />
        <Route path="/goterawarehouseVehicles" element={<GoterawarehouseVehicles/>} />
        <Route path="/overspeedreport" element={<Overspeedreport/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </HashRouter>
      
      
    </div>
  );
}

export default App;
