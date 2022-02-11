import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const Room = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Block Name",
            registerName:"blockNo",
            placeholderName:"Block No",
            inputType:"text",
            icon:"fa fa-user icon",
        },
        {
            name:"Room No",
            registerName:"roomNo",
            placeholderName:"Room No",
            inputType:"number",
            icon:"fa fa-user icon",
           
        },
    ]
    header.tableHeader=[
        "Block No","Available Room","Action"
    ]
    AllData.TableData=[
        {
            id:1,
           blockNo:"de-202",
           availableRoom:5,
           action:true
        },
        {id:2,
            blockNo:"ee-320",
            availableRoom:2,
            action:true
         },
         {
            id:3,
            blockNo:"fe-202",
            availableRoom:6,
            action:true
         },
    ]
    header.menuOptionHeader=
    {name:"Add Room & Room List",
        icon:"people-outline"};
    header.sidebarMenuHeader="Manage Room";
    return (
        <div>
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default Room;