import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/Login';
import Dashboard from './components/DashboardPart/Dashboard/Dashboard';
import DashboardMenu from './components/DashboardPart/DashboardMenu/DashboardMenu';
import SingleNotice from './components/DashboardPart/SingleNotice/SingleNotice';
import Admission from './components/DashboardPart/StudentManage/Admission/Admission';
import Home from './components/Homepage/Home';
import TextEditor from './components/TextEditor/TextEditor';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        
      <Routes>
      {/* <PrivateRoute><Dashboard/></PrivateRoute> */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/student_admission' element={<Admission />} />
        <Route path='/dashboard/:route' element={<DashboardMenu/>}/>
        <Route path='/dashboard/create_notice'element={<TextEditor/>}/>
        <Route path='/allNotice/:id' element={<SingleNotice/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
