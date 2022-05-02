import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashboardPart/Dashboard/Dashboard';
import DashboardMenu from './components/DashboardPart/DashboardMenu/DashboardMenu';
import SingleNotice from './components/DashboardPart/SingleNotice/SingleNotice';
import Admission from './components/DashboardPart/StudentManage/Admission/Admission';
import Home from './components/Homepage/Home';
import TextEditor from './components/TextEditor/TextEditor';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/student_admission' element={<Admission />} />
        <Route path='/dashboard/:route' element={<DashboardMenu/>}/>
        <Route path='/dashboard/create_notice'element={<TextEditor/>}/>
        <Route path='/allNotice/:id' element={<SingleNotice/>}/>
      </Routes>
    </div>
  )
}

export default App
