import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/DashboardPart/Dashboard/Dashboard'
import Admission from './components/DashboardPart/StudentManage/Admission/Admission'
import Home from './components/Homepage/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/student_admission' element={<Admission />} />
      </Routes>
    </div>
  )
}

export default App
