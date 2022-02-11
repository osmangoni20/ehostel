import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const MealAdd = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            icon:"fa fa-user icon",
            placeholderName:"Student Name",
            icon:"fa fa-user icon",
            inputType:"text"
        },
        {
            name:"Number Of Meal",
            icon:"fa fa-user icon",
            registerName:"totalMeal",
            icon:"fa fa-user icon",
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