import React from 'react';
import DataInput from '../DataInputAndList/DataInputAndList';
import '../Style/inputStyle.css';
const NoticeBoard = () => {
    

    const header={};
    const AllData={};

    header.tableHeader=[
        "Notice Title","Description","Submit Date", "Action"

    ]
    AllData.TableData=[
        {
            title:"Happy New Yer",
            description:"Happy New Yer",
            date:"20/2/2022",
           
        },
        {
            title:"Happy New Yer",
            description:"Happy New Yer",
            date:"20/2/2022",
           
        },
        {
            title:"Happy New Yer",
            description:"Happy New Yer",
            date:"20/2/2022",
           
        },
    ]
    AllData.inputFieldData=[
        {
            name:"Notice Title",
            registerName:"noticeTitle",
            placeholderName:"Notice Title",
            textAria:false,
            inputType:"text",
            icon:"fa fa-user icon"
          
        },
        
        {
            name:"Notice Description",
            registerName:"noticeDescription",
            placeholderName:"Notice Description",
            textAria:true,
            icon:null
        }
       
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

export default NoticeBoard;