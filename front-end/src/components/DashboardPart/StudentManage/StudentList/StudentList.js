import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Sidebar from '../../Sidebar/Sidebar';
import SidebarManuHeder from '../../SidebarManuHeder/SidebarManuHeder';
import '../../Style/tableStyle.css';
import './StudentList.css';
const StudentList = () => {
    const tableHeader=[
        "Name","Mobile No","Department","Guardian Number",
        "Shift","Action"

    ]
    const StudentData=[
        {
            name:"Mohammad Osman Goni",
            mobile:"0187584254",
            Department:"CST",
            GuardianNumber:"0145257542",
            Shift:"First"
        },
        {
            name:"Mohammad Salah",
            mobile:"0187584254",
            Department:"DTNT",
            GuardianNumber:"0145257541",
            Shift:"First"
        },
        {
            name:"Mohammad Tahmid Goni",
            mobile:"0187584264",
            Department:"TCT",
            GuardianNumber:"0145257558",
            Shift:"Second"
        }
    ]
    return (
        <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
          <SidebarManuHeder></SidebarManuHeder>
          <div className="student-list">
            <div className="admissionHeader flex items-center">
              <ion-icon name="people-outline"></ion-icon>
              <h6 className="text-xl px-2">Student List</h6>
            </div>
                <table>
                    <thead>
                        {
                            tableHeader.map(data=><th>{data}</th>)
                        }
                    </thead>
                    <tbody>
                        {
                            StudentData.map(student=>(
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.mobile}</td>
                                    <td>{student.Department}</td>
                                    <td>{student.GuardianNumber}</td>
                                    <td>{student.Shift}</td>
                                    <td>
                                        <span className="edit-icon">
                                        <ion-icon  name="create-outline"></ion-icon>
                                        </span>
                                        <span className="delete-icon">
                                        <ion-icon  name="trash-outline"></ion-icon>                                            
                                        </span>
                                    
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
          </main>
        </div>
        </div>
    );
};

export default StudentList;