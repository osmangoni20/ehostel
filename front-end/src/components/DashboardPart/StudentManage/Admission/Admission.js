import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Sidebar from '../../Sidebar/Sidebar';
import SidebarManuHeder from '../../SidebarManuHeder/SidebarManuHeder';
import './Admission.css';

const Admission = () => {
    return (
        <div>
             <DashboardHeader></DashboardHeader>
          <div className='flex'>
          <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
            <main >
            <SidebarManuHeder></SidebarManuHeder>
            <div className='admissionHeader '>
            <ion-icon name="people-outline"></ion-icon>  
            <h6 className='text-xl'>Admission Information</h6>
           </div>
           <div className='grid grid-cols-3 gap-3'>
           <div>
               <h5 className='text-bold'>Full Name</h5>
               <input type={"text"} placeholder='Full Name'></input>
           </div>
           <div>
               <h5 className='text-bold'>Full Name</h5>
               <input type={"text"} placeholder='Full Name'></input>
           </div>
           <div>
               <h5 className='text-bold'>Full Name</h5>
               <input type={"text"} placeholder='Full Name'></input>
           </div>
           </div>
            </main>
          </div>
        </div>
    );
};

export default Admission;