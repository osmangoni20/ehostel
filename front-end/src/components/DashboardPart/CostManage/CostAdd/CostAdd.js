import React from 'react';
import DataInputAndList from '../../DataInputAndList/DataInputAndList';

const CostAdd = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Cost Type",
            registerName:"costType",
            placeholderName:"Cost Type",
            icon:"fa fa-user icon",
            inputType:"text"
        },
        {
            name:"Amount",
            registerName:"amount",
            placeholderName:"Amount",
            icon:"fa fa-user icon",
            inputType:"number"
        },
        {
            name:"Cost Details",
            registerName:"costDetails",
            icon:"fa fa-user icon",
            placeholderName:"Cost Details",
            inputType:"text"
        },
        {
            name:"Date",
            registerName:"date",
            placeholderName:"Date",
            inputType:"date"
        }
    ]
    header.menuOptionHeader=
    {name:"Hostel Cost Add Information",
        icon:"people-outline"};
    header.sidebarMenuHeader="Cost Add";
    return (
        <div>
            
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default CostAdd;