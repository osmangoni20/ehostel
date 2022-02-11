import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const MealAdd = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            placeholderName:"Student Name",
            inputType:"text"
        },
        {
            name:"Number Of Meal",
            registerName:"totalMeal",
            placeholderName:"Total Meal",
            inputType:"number"
        },
      
        {
            name:"Date",
            registerName:"date",
            placeholderName:"Date",
            inputType:"date"
        }
    ]
    header.menuOptionHeader=
    {name:"New Meal Add Information",
        icon:"people-outline"};
    header.sidebarMenuHeader="New Meal Add";
    return (
        <div>
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default MealAdd;