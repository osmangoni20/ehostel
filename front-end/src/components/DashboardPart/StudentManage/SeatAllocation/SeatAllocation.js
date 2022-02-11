import React from 'react';
import DataInput from '../../DataInputAndList/DataInputAndList';
import '../../Style/inputStyle.css';
import './SeatAlocation.css';
const SeatAllocation = () => {
    

    const header={};
    const AllData={};

    header.tableHeader=[
        "Name","Block No","Room No","Bed No", "Action"

    ]
    AllData.TableData=[
        {
            name:"Mohammad Osman Goni",
            block:"B",
            room:"202",
            bed:"B200-1",
        },
        {
            name:"Mohammad Khan",
            block:"A",
            room:"102",
            bed:"A102-3",
        },
        {
            name:"Taskin Ahamed",
            block:"C",
            room:"305",
            bed:"C305-2",
        },
    ]
    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            placeholderName:"Student Name",
            inputType:"text",
            icon:"fa fa-user icon",
            selectOptions:null
        },
        {
            name:"Block No",
            registerName:"blockNo",
            placeholderName:"Block No",
            inputType:null,
            icon:"fa fa-user icon",
            selectOptions:[
                {name:"BB-200",value:"BB-200"},
                {name:"AB-300",value:"AB-300"},
                {name:"DD-100",value:"DD-100"},
            ]
        },
        {
            name:"Room No",
            registerName:"roomNo",
            placeholderName:"Room No",
            inputType:null,
            icon:"fa fa-user icon",
            selectOptions:[
                {name:"Room 1",value:"R-1"},
                {name:"Room 2",value:"R-2"},
                {name:"Room 3",value:"R-3"},
                {name:"Room 4",value:"R-4"},
            ]
        },
        {
            name:"Bed No",
            registerName:"bedNo",
            placeholderName:"Bed No",
            icon:"fa fa-user icon",
            inputType:null,
            selectOptions:[
                {name:"Bed 1",value:"B-1"},
                {name:"Bed 2",value:"B-2"},
                {name:"Bed 3",value:"B-3"},
                {name:"Bed 4",value:"B-4"},
            ]
        },
    ]
header.menuOptionHeader={
    name:"Students Seat Allocation",icon:"people-outline"};
   header.sidebarMenuHeader="Seat Allocation";
    
    return (
        <>
            
    <DataInput header={header} AllData={AllData}></DataInput>
        </>
    );
};

export default SeatAllocation;