export const DashboardFakeData =
  {

    seat_allocation:{
        tableHeader:[
            "Name","Block No","Room No","Bed No", "Action"
    
        ],
        tableData:[
            {id:1,
                name:"Mohammad Osman Goni",
                block:"B",
                room:"202",
                bed:"B200-1",
                action:true
            },
            {id:2,
                name:"Mohammad Khan",
                block:"A",
                room:"102",
                bed:"A102-3",
                action:true
            },
            {
                id:3,
                name:"Taskin Ahamed",
                block:"C",
                room:"305",
                bed:"C305-2",
                action:true
            },
        ],
        inputFieldData:[
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
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
    menuOptionHeader:{
        name:"Students Seat Allocation",icon:"people-outline"}
       ,sidebarMenuHeader:"Seat Allocation"
    },
    student_list:{
        tableHeader:[
            "Name","Mobile No","Department","Guardian Number",
            "Shift","Action"
    
        ],
        tableData:[
            {
                id:1,
                name:"Mohammad Osman Goni",
                mobile:"0187584254",
                Department:"CST",
                GuardianNumber:"0145257542",
                Shift:"First",
                action:true
            },
            {id:2,
                name:"Mohammad Salah",
                mobile:"0187584254",
                Department:"DTNT",
                GuardianNumber:"0145257541",
                Shift:"First",
                action:true
            },
            {id:3,
                name:"Mohammad Tahmid Goni",
                mobile:"0187584264",
                Department:"TCT",
                GuardianNumber:"0145257558",
                Shift:"Second",
                action:true
            }
        ],
      
        sidebarMenuHeader:"Student List",
        menuOptionHeader:{name:"Student List",icon:"people-outline"},
   
        
    }, 
    student_deposit:{
        inputFieldData:[
            
            {
                name:"Student Name",
                registerName:"studentName",
                placeholderName:"Student Name",
                icon:"fa fa-user icon",
                inputType:"text",
                
            },
            {
                name:"Amount",
                registerName:"amount",
                placeholderName:"Amount",
                icon:"fa fa-user icon",
                inputType:"number"
              
            
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        tableHeader:[
            "Name","Amount","Deposit Date","Action"
        ],
        tableData:[
            {id:1,
                name:"Mohammad Osman Goni",
                amount:2000,
                date:"5-2-2022",
                action:true
            },
            {id:2,
                name:"kamal Khan",
                amount:3000,
                date:"9-2-2022",
                action:true
            },
            {
                id:3,
                name:"Saleh Sadi",
                amount:5000,
                date:"4-2-2022",
                action:true
            },
        ],
        sidebarMenuHeader:"Deposit",
        menuOptionHeader:{name:"Student Deposit",icon:"people-outline"},
        
    },
    cost_list:{
        tableHeader:[
            "Cost Type","Amount","Cost Details", "Date","Action"
    
        ],
        tableData:[
            {
                id:1,
                type:"Net Bill",
                amount:"500 Tk",
                details:"Internet Connection Bill",
                date:"5/2/2022",
                action:true
                
            },
            {
                id:2,
                type:"Net Bill",
                amount:"500 Tk",
                details:"Internet Connection Bill",
                date:"5/2/2022",
                action:true
                
            },
            {
                id:3,
                type:"Net Bill",
                amount:"500 Tk",
                details:"Internet Connection Bill",
                date:"5/2/2022",
                action:true
            },
        ]
        ,
        sidebarMenuHeader:"Cost View",
        menuOptionHeader:{name:"Hostel Cost List",icon:"people-outline"},
        
        
    },
    add_new_cost:{
        inputFieldData:[
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
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        menuOptionHeader:
        {name:"Hostel Cost Add Information",
            icon:"people-outline"},
        sidebarMenuHeader:"Cost Add"
    }
    ,add_payment:{
        inputFieldData:[
            {
                name:"Student Name",
                registerName:"studentName",
                placeholderName:"Student Name",
                icon:"fa fa-user icon",
                inputType:"text",
                
            },
            {
                name:"Amount",
                registerName:"amount",
                placeholderName:"Amount",
                icon:"fa fa-user icon",
                inputType:"number"
              
            
            },
            {
                name:"Paid By",
                registerName:"paidBy",
                placeholderName:"Paid By",
                icon:"fa fa-user icon",
                selectOptions:[
                    {name:"BKash",value:"bkash"},
                    {name:"Rocket",value:"rocket"},
                    {name:"Bank",value:"bank"},
                ],
               
            },
            
            {
                name:"Mobile No/Transaction Id",
                registerName:"paymentUniqNumber",
                placeholderName:"Mobile No/Transaction Id",
                inputType:"text",
                icon:"fa fa-user icon",
            },
            {
                name:"Payment Date",
                registerName:"paymentdate",
                placeholderName:"Payment Date",
                inputType:"date",
                icon:null
            }
            ,{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        menuOptionHeader:
        {name:"Payment",
            icon:"people-outline"},
        sidebarMenuHeader:"Payment Add"
    },  
    payment_list:{
        inputFieldData:[
            {
                name:"Student Name",
                registerName:"studentName",
                placeholderName:"Student Name",
                inputType:"text",
                icon:"fa fa-user icon",
                search:true
            },
        ],
            tableHeader:[
            "Name","Amount","Paid By","Transaction/Mobile No","Date","Action"
        ],
        tableData:[
            {
                id:1,
                name:"Mohammad Osman Goni",
                amount:3000,
                paidBy:" Bank",
                paymentUniqId:"20412536",
                date:"20-2-2022",
                action:true
            },
            {id:2,
                name:"Mohammad Salah",
                amount:2500,
                paidBy:" Bkash",
                paymentUniqId:"30412536",
                date:"22-2-2022",
                action:true
            },
            {id:3,
                name:"Mohammad Tahmid Goni",
                amount:5000,
                paidBy:" Rocket",
                paymentUniqId:"def5dwe5225de36",
                date:"20-3-2022",
                action:true
            }
        ],
        
        sidebarMenuHeader:"Payment View",
        menuOptionHeader:{
            name:"Student Payment List",
            icon:"people-outline"}
    },
    notice:{
        tableHeader:[
            "Notice Title","Description","Submit Date", "Action"
    
        ],
        tableData:[
            {   id:1,
                title:"Happy New Yer",
                description:"Happy New Yer",
                date:"20/2/2022",
                action:true
            },
            {id:2,
                title:"Happy New Yer",
                description:"Happy New Yer",
                date:"20/2/2022",action:true
               
            },
            {id:3,
                title:"Happy New Yer",
                description:"Happy New Yer",
                date:"20/2/2022",
                action:true
               
            },
        ],
        inputFieldData:[
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
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
           
        ],
    menuOptionHeader:{
        name:"Students Seat Allocation",icon:"people-outline"},
       sidebarMenuHeader:"Seat Allocation"
    },
    bill_list:{
        tableHeader:[
            "Name","Number Of Meal","Date","Action"
    
        ],
        tableData:[
            {   id:1,
                name:"Mohammad Osman Goni",
                billType:" Game Bill",
                Amount:3000,
                date:"20-2-2022",
                action:true
            },
            {id:2,
                name:"Mohammad Salah",
                billType:" Sports Bill",
                Amount:500,
                date:"25-2-2022",
                action:true
            },
            {id:3,
                name:"Mohammad Tahmid Goni",
                billType:" Milad Bill",
                Amount:200,
                date:"2-2-2022",
                action:true
            }
        ],
       
        sidebarMenuHeader:"Student List",
        menuOptionHeader:{name:"Student List",icon:"people-outline"},
        
    },
    add_bill:{
        inputFieldData:[
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
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        menuOptionHeader:
        {name:" Bill Add Information",
            icon:"people-outline"},
        sidebarMenuHeader:"Bill Add"
    },

    add_new_meal:{
        inputFieldData:[
            {
                name:"Student Name",
                registerName:"studentName",
                icon:"fa fa-user icon",
                placeholderName:"Student Name",
                inputType:"text"
            },
            {
                name:"Number Of Meal",
                icon:"fa fa-user icon",
                registerName:"totalMeal",
                placeholderName:"Total Meal",
                inputType:"number"
            },
          
            {
                name:"Date",
                registerName:"date",
                placeholderName:"Date",
                inputType:"date"
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        menuOptionHeader:
        {name:"New Meal Add Information",
            icon:"people-outline"},
        sidebarMenuHeader:"New Meal Add"
    },

    meal_list:{
        tableHeader:[
            "Name","Number Of Meal","Date","Action"
    
        ],
         tableData:[
            {
                id:1,
                name:"Mohammad Osman Goni",
                numberOfMeal:3,
                date:"20-2-2022",
                action:true

            },
            {
                id:2,
                name:"Mohammad Salah",
                numberOfMeal:3,
                date:"20-2-2022",
                action:true
            },
            {
                id:3,
                name:"Mohammad Tahmid Goni",
                numberOfMeal:3,
                date:"20-2-2022",
                action:true
            }
        ]
        ,
        sidebarMenuHeader:"Student List",
        menuOptionHeader:{name:"Student List",icon:"people-outline"}
    },
    employee_manage:{
        inputFieldData:[
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
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        tableHeader:[
            "Name","Mobile","Email","Designation","Action"
        ],
        tableData:[
            {
                id:1,
                name:"Naymot Ullah",
                mobile:"0152455487",
                email:"naymot@gmail.com",
                designation:"Hostel Manager",
                action:true
            },
            {
                id:2,
                name:"Kadir Khan",
                mobile:"0152455487",
                email:"kadir@gmail.com",
                designation:"Hostel Sub Manager",
                action:true
            },
            {
                id:3,
                name:"Khaled Billah",
                mobile:"019658487",
                email:"khaled@gmail.com",
                designation:"Hostel Co-Manager",
                action:true
            },
        ],
        menuOptionHeader:
        {name:"Add Employee & Employee List",
            icon:"people-outline"},
        sidebarMenuHeader:"Employee"
    },
 room:{
    inputFieldData: [
      {
        name: "Block Name",
        registerName: "blockNo",
        placeholderName: "Block No",
        inputType: "text",
        icon: "fa fa-user icon",
      },
      {
        name: "Room No",
        registerName: "roomNo",
        placeholderName: "Room No",
        inputType: "number",
        icon: "fa fa-user icon",
      }
      ,{
        name:"Unique Id",
        registerName:"id",
        placeholderName:"Any Unique Id",
        icon:"fa fa-user icon",
        inputType:"text",
        
    }
    ],
    tableHeader: ["Block No", "Available Room", "Action"],
    tableData: [
      {
        id: 1,
        blockNo: "de-202",
        availableRoom: 5,
        action: true,
      },
      { id: 2, blockNo: "ee-320", availableRoom: 2, action: true },
      {
        id: 3,
        blockNo: "fe-202",
        availableRoom: 6,
        action: true,
      },
    ],
    menuOptionHeader: { name: "Add Room & Room List", icon: "people-outline" },
    sidebarMenuHeader: "Manage Room",
    },

    admin:{
        inputFieldData:[
            {
                name:"Admin Name",
                registerName:"adminName",
                placeholderName:"Admin Name",
                inputType:"text",
                
                icon:""
            },
            {
                name:"Mobile Number",
                registerName:"mobileNumber",
                placeholderName:"Mobile Number",
                inputType:"number"
                ,
                icon:""
            },
            
            {
                name:"Email",
                registerName:"email",
                placeholderName:"Email",
                inputType:"email",
                icon:""
            },{
                name:"Unique Id",
                registerName:"id",
                placeholderName:"Any Unique Id",
                icon:"fa fa-user icon",
                inputType:"text",
                
            }
        ],
        tableHeader:[
            "Name","Mobile","Email","Action"
        ],
        tableData:[
            {
                id:1,
                name:"Kader Sah",
                mobile:"0152455487",
                email:"kader@gmail.com",
                action:true
            },
            {
                id:2,
                name:"Nahel Khan",
                mobile:"0152455487",
                email:"nahel@gmail.com",
                action:true
            },
            {
                id:3,
                name:"Tabrij Shamsi",
                mobile:"019658487",
                email:"tabrij@gmail.com",
                action:true
            },
        ],
        menuOptionHeader:
        {name:"Add Admin & Admin List",
            icon:"people-outline"},
       sidebarMenuHeader:"Admin"
    }

};
