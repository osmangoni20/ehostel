import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './components/DashboardPart/Dashboard/Dashboard';

function App() {
  return (
    <div>

      {/* <Header />
      <div className='bg-indigo-600 w-full h-screen'></div> */}
    
  
      <Routes>
      
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </div>
  )
}

export default App;
