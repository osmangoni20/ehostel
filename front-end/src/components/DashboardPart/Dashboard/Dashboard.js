import React from "react";
import { DashboardFakeData } from '../../../DashboardFakeData';
import CostChart from "../CostChart/CostChart";
import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import NewNotice from "../NewNotice/NewNotice";
import Sidebar from "../Sidebar/Sidebar";
import SidebarManuHeder from "../SidebarManuHeder/SidebarMenuHeder";
import "./Dashboard.css";
const Dashboard = () => {

  // setNewNotice()
const menuHeader="Dashboard";


const totalMeal=DashboardFakeData.meal_list.tableData.reduce((preValue,currValue)=>preValue+currValue.numberOfMeal,0);
const cardData=[
  {
      id:1,
      name:"Total Employee",
      total:DashboardFakeData?.employee_manage?.tableData?.length,
  },
  {
      id:2,
      name:"Total Student",
      total:DashboardFakeData?.student_list?.tableData?.length
  },
  {
      id:3,
      name:"Total Rooms",
      total:DashboardFakeData?.room?.tableData?.length,
  },
  {
      id:4,
      name:"Today's Meal",
      total:totalMeal
  },
]
  return (
    <div className="dashboard">
      <DashboardHeader></DashboardHeader>

      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>

        <main>
          <SidebarManuHeder menuHeader={menuHeader}></SidebarManuHeder>
          <div className="flex flex-wrap justify-between mt-5">
            {cardData.map((cardData) => (
              <DashboardCard key={cardData.id} card={cardData}></DashboardCard>
            ))}
          </div>
          {/* */}
          <div className="mt-9 grid grid-cols-2 gap-5 ">
            <div className=" bg-white rounded-xl">
              <CostChart></CostChart>
            </div>
          {/* Notice */}
          <NewNotice></NewNotice>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
