import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const Employee = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Employee Name",
            registerName:"employeeName",
            placeholderName:"Employee Name",
            inputType:"text",
            icon:"fa fa-user icon",
        },
        {
            name:"Mobile Number",
            registerName:"mobileNumber",
            placeholderName:"Mobile Number",
            inputType:"number"
            ,
            icon:"fa fa-user icon"
        },
        
        {
            name:"Email",
            registerName:"email",
            placeholderName:"Email",
            inputType:"email",
            icon:"fa fa-user icon"
        },
        {
            name:"Designation",
            registerName:"designation",
            placeholderName:"Designation",
            inputType:"text",
            icon:"fa fa-user icon",
        },
        {
            name:"National ID Card",
            registerName:"nationalIdCard",
            placeholderName:"National Id Card",
            inputType:"file",
            icon:"fa fa-user icon",
        },{
            name:"Image",
            registerName:"image",
            placeholderName:"Image",
            inputType:"file",
            icon:"fa fa-user icon",
        }
    ]
    header.tableHeader=[
        "Name","Mobile","Email","Designation","Action"
    ]
    AllData.TableData=[
        {
            name:"Naymot Ullah",
            mobile:"0152455487",
            email:"naymot@gmail.com",
            designation:"Hostel Manager"
        },
        {
            name:"Kadir Khan",
            mobile:"0152455487",
            email:"kadir@gmail.com",
            designation:"Hostel Sub Manager"
        },
        {
            name:"Khaled Billah",
            mobile:"019658487",
            email:"khaled@gmail.com",
            designation:"Hostel Co-Manager"
        },
    ]
    header.menuOptionHeader=
    {name:"Add Employee & Employee List",
        icon:"people-outline"};
    header.sidebarMenuHeader="Employee";
    return (
        <div>
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default Employee;