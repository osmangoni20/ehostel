import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const BillAdd = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            placeholderName:"Student Name",
            icon:"fa fa-user icon",
            inputType:"text"
        },
        {
            name:"Bill Type",
            registerName:"billType",
            icon:"fa fa-user icon",
            placeholderName:"Bill Type",
            inputType:"text"
        },

        {
            name:"Amount",
            registerName:"amount",
            icon:"fa fa-user icon",
            placeholderName:"Amount",
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
    {name:" Bill Add Information",
        icon:"people-outline"};
    header.sidebarMenuHeader="Bill Add";
    return (
        <div>
            
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default BillAdd;