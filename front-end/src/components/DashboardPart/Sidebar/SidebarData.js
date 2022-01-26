const SidebarData = [
  {
    name: "Room Manage",
    icon: "bed-outline",
    subOptions: [
      { name: "Add New ", link: "add_room" },
      { name: "List View", link: "room_list" },
    ],
  },
  {
    name: "Cost Manage",
    icon: "calculator-outline",
    subOptions: [
      { name: "Add New ", link: "add_new_cost" },
      { name: "List View", link: "cost_list" },
    ],
  },
  {
    name: "Meal Manage",
    icon: "fast-food-outline",
    subOptions: [
      { name: "Add New Meal", link: "add_new_meal" },
      { name: "Meal List", link: "meal_list" },
    ],
  },
  {
    name: "Students Manage",

    subOptions: [
      { name: "Student Admission", link: "/dashboard/student_admission" },

      {
        name: "Student List",
        link: "/member_list",
      },
      {
        name: "Seat Alocation",
        link: "/seat_alocation",
      },
    ],
    icon: "people-outline",
  },

  {
    name: "Students Payment",
    icon: "logo-paypal",
    subOptions: [
      { name: "Add ", link: "add_payment" },
      { name: "View", link: "payment_list" },
    ],
  },
  {
    name: "Employee Manage",
    link: "/employee_manage",
    icon: "people-circle-outline",
  },
  {
    name: "Bill Manage",
    icon: "newspaper-outline",
    subOptions: [
      { name: "Add New ", link: "add_bill" },
      { name: "List View", link: "bill_list" },
    ],
  },
  {
    name: "Notice Board",
    icon: "notifications-outline",
    subOptions: [
      { name: "Add Notice ", link: "add_notice" },
      { name: "Notice", link: "notice" },
    ],
  },
  {
    name: "New Admin",
    subOptions: false,
    link: "/add_admin",
    icon: "person-add-outline",
  },
];
export default SidebarData;
