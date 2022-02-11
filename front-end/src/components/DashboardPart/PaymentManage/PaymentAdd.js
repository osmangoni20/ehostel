import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const PaymentAdd = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            placeholderName:"Student Name",
            inputType:"text",
            icon:""
        },
        {
            name:"Amount",
            registerName:"amount",
            placeholderName:"Amount",
            inputType:"number"
            ,
            icon:""
        },
        {
            name:"Paid By",
            registerName:"paidBy",
            placeholderName:"Paid By",
            selectOptions:[
                {name:"BKash",value:"bkash"},
                {name:"Rocket",value:"rocket"},
                {name:"Bank",value:"bank"},
            ],
            icon:""
        },
        
        {
            name:"Mobile No/Transaction Id",
            registerName:"paymentUniqNumber",
            placeholderName:"Mobile No/Transaction Id",
            inputType:"text",
            icon:""
        },
        {
            name:"Payment Date",
            registerName:"paymentdate",
            placeholderName:"Payment Date",
            inputType:"date",
            icon:""
        }
    ]
    header.menuOptionHeader=
    {name:"Payment",
        icon:"people-outline"};
    header.sidebarMenuHeader="Payment Add";
    return (
        <div>
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default PaymentAdd;