import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashboardPart/Dashboard/Dashboard';
import DashboardMenu from './components/DashboardPart/DashboardMenu/DashboardMenu';
import Admission from './components/DashboardPart/StudentManage/Admission/Admission';
import Home from './components/Homepage/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/student_admission' element={<Admission />} />
        {/* <Route path='/seat_allocation' element={<SeatAllocation />} />
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
        <Route path='/employee_manage' element={<Employee/>}/>*/}
        <Route path='/dashboard/:route' element={<DashboardMenu/>}/>
        
      </Routes>
    </div>
  )
}

export default App
