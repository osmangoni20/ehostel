import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashboardPart/Dashboard/Dashboard';
import Admission from './components/DashboardPart/StudentManage/Admission/Admission';
import SeatAllocation from './components/DashboardPart/StudentManage/SeatAllocation/SeatAllocation';
import StudentList from './components/DashboardPart/StudentManage/StudentList/StudentList';
import Home from './components/Homepage/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/student_admission' element={<Admission />} />
        <Route path='/seat_allocation' element={<SeatAllocation />} />
        <Route path='/student_list' element={<StudentList />} />
      </Routes>
    </div>
  )
}

export default App
