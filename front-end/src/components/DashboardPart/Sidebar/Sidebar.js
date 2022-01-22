import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

let DashboardMenu = [
  { name: "Room Manage", link: "/room_manage", icon: "bed-outline" },
  { name: "Member Admission", link: "/new_add", icon: "person-add-outline" },
  { name: "Cost Manage", link: "/cost_manage", icon: "calculator-outline" },
  { name: "Meal Manage", link: "/meal_manage", icon: "fast-food-outline" },
  { name: "Students Manage", link: "/student_manage", icon: "people-outline" },
  { name: "Students Payment", link: "/student_payment", icon: "logo-paypal" },
  {
    name: "Employee Manage",
    link: "/employee_manage",
    icon: "people-circle-outline",
  },
  { name: "Bill Manage", link: "/bill_manage", icon: "newspaper-outline" },
  { name: "Notice Board", link: "/notice", icon: "notifications-outline" },
  { name: "New Admin", link: "/add_admin", icon: "person-add-outline" },
];
<ion-icon name=""></ion-icon>;
const Sidebar = () => {
  return (
    <div className="sidebar h-screen">
      <div className="flex items-center dashboardlogo">
        <span className="text-2xl pt-2 pr-1 text-black">
          <ion-icon name="grid-outline"></ion-icon>
        </span>
        <h1>Dashboard</h1>
      </div>
      {DashboardMenu.map((menu) => (
        <Link to={menu.link}>
          <li className="flex justify-between px-2 hover:bg-sky-700">
            <div className=" items-center flex">
              <ion-icon name={menu.icon}></ion-icon>
              <span className="pl-1">{menu.name}</span>
            </div>
            <p>{"<"}</p>
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
