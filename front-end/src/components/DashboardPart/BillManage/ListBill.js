import React from 'react';
import ListView from '../ListView/ListView';
import '../Style/tableStyle.css';
const ListBill = () => {
    const tableHeader=[
        "Name","Number Of Meal","Date","Action"

    ]
    const BillListData=[
        {
            name:"Mohammad Osman Goni",
            billType:" Game Bill",
            Amount:3000,
            date:"20-2-2022",
        },
        {
            name:"Mohammad Salah",
            billType:" Sports Bill",
            Amount:500,
            date:"25-2-2022",
        },
        {
            name:"Mohammad Tahmid Goni",
            billType:" Milad Bill",
            Amount:200,
            date:"2-2-2022",
        }
    ]
    const header={
    sidebarMenuHeader:"Student List",
    menuOptionHeader:{name:"Student List",icon:"people-outline"},
    tableHeader
    }
   
    return (
        <div>

     <ListView  header={header} tableData={BillListData}></ListView>

        </div>
    );
};

export default ListBill;