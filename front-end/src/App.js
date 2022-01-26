import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/DashboardPart/Dashboard/Dashboard";
import Admission from "./components/DashboardPart/StudentManage/Admission/Admission";

function App() {
  return (
    <div>
      {/* <Header />
      <div className='bg-indigo-600 w-full h-screen'></div> */}
      
      {/* <DropDown></DropDown> */}
      
      

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/student_admission" element={<Admission/>}/>
      </Routes>
    </div>
  );
}

export default App;
