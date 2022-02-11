const SidebarData = [
  {
    name: "Room Manage",
    icon: "bed-outline",
    subOptions: [
      { name: "Room", link: "/dashboard/room" },
    ],
  },
  {
    name: "Cost Manage",
    icon: "calculator-outline",
    subOptions: [
      { name: "Add New ", link: "/dashboard/add_new_cost" },
      { name: "List View", link: "/dashboard/cost_list" },
    ],
  },
  {
    name: "Meal Manage",
    icon: "fast-food-outline",
    subOptions: [
      { name: "Add New Meal", link: "/dashboard/add_new_meal" },
      { name: "Meal List", link: "/dashboard/meal_list" },
    ],
  },
  {
    name: "Students Manage",

    subOptions: [
      { name: "Student Admission", link: "/dashboard/student_admission" },

      {
        name: "Student List",
        link: "/dashboard/student_list",
      },
      {
        name: "Seat Allocation",
        link: "/dashboard/seat_allocation",
      },
      {
        name: "Deposit",
        link: "/dashboard/student_deposit",
      },
    ],
    icon: "people-outline",
  },

  {
    name: "Students Payment",
    icon: "logo-paypal",
    subOptions: [
      { name: "Add ", link: "/dashboard/add_payment" },
      { name: "View", link: "/dashboard/payment_list" },
    ],
  },
  {
    name: "Employee Manage",
    link: "/dashboard/employee_manage",
    icon: "people-circle-outline",
  },
  {
    name: "Bill Manage",
    icon: "newspaper-outline",
    subOptions: [
      { name: "Add New ", link: "/dashboard/add_bill" },
      { name: "List View", link: "/dashboard/bill_list" },
    ],
  },
  {
    name: "Notice Board",
    icon: "notifications-outline",
    subOptions: [
      // { name: "Add Notice ", link: "/dashboard/add_notice" },
      { name: "Notice", link: "/dashboard/notice" },
    ],
  },
  {
    name: "Admin",
    subOptions: false,
    link: "/dashboard/admin",
    icon: "person-add-outline",
  },
];
export default SidebarData;
