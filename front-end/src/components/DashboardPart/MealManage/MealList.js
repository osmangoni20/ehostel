import React from 'react';
import ListView from '../ListView/ListView';
import '../Style/tableStyle.css';
const MealList = () => {
    const tableHeader=[
        "Name","Number Of Meal","Date","Action"

    ]
    const MealListData=[
        {
            name:"Mohammad Osman Goni",
            numberOfMeal:3,
            date:"20-2-2022",
        },
        {
            name:"Mohammad Salah",
            numberOfMeal:3,
            date:"20-2-2022",
        },
        {
            name:"Mohammad Tahmid Goni",
            numberOfMeal:3,
            date:"20-2-2022",
        }
    ]
    const header={
    sidebarMenuHeader:"Student List",
    menuOptionHeader:{name:"Student List",icon:"people-outline"},
    tableHeader
    }
   
    return (
        <div>

     <ListView  header={header} tableData={MealListData}></ListView>

        </div>
    );
};

export default MealList;