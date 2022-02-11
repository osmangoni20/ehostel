import React from 'react';
import ListView from '../../ListView/ListView';
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
    const header={
    sidebarMenuHeader:"Student List",
    menuOptionHeader:{name:"Student List",icon:"people-outline"},
    tableHeader
    }
   
    return (
        <div>

     <ListView  header={header} tableData={StudentData}></ListView>

        </div>
    );
};

export default StudentList;