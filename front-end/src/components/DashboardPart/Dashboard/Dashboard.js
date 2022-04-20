import React from "react";
import CostChart from "../CostChart/CostChart";
import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { cardData } from "../fakeData";
import NewNotice from "../NewNotice/NewNotice";
import Sidebar from "../Sidebar/Sidebar";
import SidebarManuHeder from "../SidebarManuHeder/SidebarMenuHeder";
import "./Dashboard.css";
const Dashboard = () => {

  // setNewNotice()
const menuHeader="Dashboard";
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
