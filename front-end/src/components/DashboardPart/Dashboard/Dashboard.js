import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import CardData from '../fakeData';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
const Dashboard = () => { 
    return (<div className='dashboard'>
        <DashboardHeader></DashboardHeader>
            <div className="grid grid-rows-1 grid-cols-5 mt-1">
                <div class="row-span-full col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div class="col-span-4 px-8">
                    <h1>Dashboard</h1>
                    <div className='flex flex-wrap justify-between mt-5'>
                        {
                        CardData.map(cardData=><DashboardCard key={cardData.id} card={cardData}></DashboardCard>)
                        }
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Dashboard;