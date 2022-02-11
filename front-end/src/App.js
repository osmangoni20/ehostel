import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/DashboardPart/AdminManage/Admin';
import BillAdd from './components/DashboardPart/BillManage/BillAdd';
import ListBill from './components/DashboardPart/BillManage/ListBill';
import CostAdd from './components/DashboardPart/CostManage/CostAdd/CostAdd';
import CostList from './components/DashboardPart/CostManage/CostAdd/CostList/CostList';
import Dashboard from './components/DashboardPart/Dashboard/Dashboard';
import Employee from './components/DashboardPart/EmployManage/Employee';
import MealAdd from './components/DashboardPart/MealManage/MealAdd';
import MealList from './components/DashboardPart/MealManage/MealList';
import NoticeBoard from './components/DashboardPart/NoticeBoard/NoticeBoard';
import PaymentAdd from './components/DashboardPart/PaymentManage/PaymentAdd';
import PaymentView from './components/DashboardPart/PaymentManage/PaymentView';
import Room from './components/DashboardPart/Room Manage/Room';
import Admission from './components/DashboardPart/StudentManage/Admission/Admission';
import Deposit from './components/DashboardPart/StudentManage/Deposit/Deposit';
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
        <Route path='/student_deposit' element={<Deposit/>}/>
        <Route path='/add_new_cost' element={<CostAdd/>}/>
        <Route path='/cost_list' element={<CostList/>}/>
        <Route path='/add_payment' element={<PaymentAdd/>}/>
        <Route path='/payment_list' element={<PaymentView/>}/>
        <Route path='/add_bill' element={<BillAdd/>}/>
        <Route path='/bill_list' element={<ListBill/>}/>
        <Route path='/notice' element={<NoticeBoard/>}/>
        <Route path='/add_new_meal' element={<MealAdd/>}/>
        <Route path='/meal_list' element={<MealList/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/employee_manage' element={<Employee/>}/>
      </Routes>
    </div>
  )
}

export default App
