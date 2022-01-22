import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CostChart from "../CostChart/CostChart";
import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { CardData, NewNotice } from "../fakeData";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  const [newNotice, setNewNotice] = useState();
  useEffect(() => {
    setNewNotice(NewNotice);
  }, []);

  // setNewNotice()

  return (
    <div className="dashboard">
      <DashboardHeader></DashboardHeader>

      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Sidebar></Sidebar>
        </aside>

        <main>
          <div className="active-menu flex justify-between items-center">
            <Link to="/">
              <h2>Dashboard</h2>
            </Link>
            <Link to="/home">
              <h2>Home</h2>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            {CardData.map((cardData) => (
              <DashboardCard key={cardData.id} card={cardData}></DashboardCard>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 mt-9">
            <div className="NewNotice">
              <div className="noticeHeader flex  items-center">
                <span className="pt-2">
                  <ion-icon name="aperture-outline"></ion-icon>
                </span>
                <h3>Notice Board</h3>
              </div>
              <div className="noticeBody">
                {newNotice?.map((notice) => (
                  <Link to="allNotice/noticeId">
                    <li className="singleNotice">
                      <h6 className="noticeDate">{notice.date}</h6>
                      <h5>{notice.header}</h5>
                    </li>
                  </Link>
                ))}
              </div>

              <div className="noticeFooter flex justify-between items-center">
                <h5>Top 3 Notice</h5>
                <div className="flex items-center ">
                  <h6>View All</h6>
                  <span className="text-xl pt-1">
                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-black border-2 border-gray-100">
              <CostChart></CostChart>
            </div>
          </div>
        </main>
      </div>

      {/* <div className="grid grid-rows-1 grid-cols-5 mt-1">
        <div class="col-span-1 overflow-y-scroll">
          <Sidebar></Sidebar>
        </div>
        <div class="col-span-4 px-8">
         
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
