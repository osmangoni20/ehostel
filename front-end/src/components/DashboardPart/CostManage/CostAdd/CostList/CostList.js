import React from 'react';
import ListView from '../../../ListView/ListView';

const CostList = () => {
    const tableHeader=[
        "Cost Type","Amount","Cost Details", "Date","Action"

    ]
    const CostData=[
        {
            type:"Net Bill",
            amount:"500 Tk",
            details:"Internet Connection Bill",
            date:"5/2/2022",
            
        },
        {
            type:"Net Bill",
            amount:"500 Tk",
            details:"Internet Connection Bill",
            date:"5/2/2022",
            
        },
        {
            type:"Net Bill",
            amount:"500 Tk",
            details:"Internet Connection Bill",
            date:"5/2/2022",
        },
    ]
    const header={
    sidebarMenuHeader:"Cost View",
    menuOptionHeader:{name:"Hostel Cost List",icon:"people-outline"},
    tableHeader
    }
   
    return (
        <div>

     <ListView  header={header} tableData={CostData}></ListView>

        </div>
    );
};

export default CostList;