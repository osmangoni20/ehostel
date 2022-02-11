import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import MenuOptionsHeader from "../MenuOptionsHeader/MenuOptionsHeader";
import Sidebar from "../Sidebar/Sidebar";
import SidebarMenuHeder from "../SidebarManuHeder/SidebarMenuHeder";
import "../Style/tableStyle.css";
import "./ListView.css";
const ListView = ({ header, tableData }) => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
          <SidebarMenuHeder
            menuHeader={header.sidebarMenuHeader}
          ></SidebarMenuHeder>
          <div className="listView">
            <MenuOptionsHeader
              menuOptionHeader={header.menuOptionHeader}
            ></MenuOptionsHeader>

            <table>
              <thead>
                {header?.tableHeader.map((data) => (
                  <th>{data}</th>
                ))}
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    {Object.keys(data).map((options) => (
                      <td>{data[options]}</td>
                    ))}

                    <td>
                      <span className="edit-icon">
                        <ion-icon name="create-outline"></ion-icon>
                      </span>
                      <span className="delete-icon">
                        <ion-icon name="trash-outline"></ion-icon>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListView;
