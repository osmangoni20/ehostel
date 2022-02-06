import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import SidebarManuHeder from "../../SidebarManuHeder/SidebarManuHeder";
import '../../Style/inputStyle.css';
import "./Admission.css";
const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
          <SidebarManuHeder></SidebarManuHeder>
          <div className="admission">
            <div className="admissionHeader flex items-center">
              <ion-icon name="people-outline"></ion-icon>
              <h6 className="text-xl px-2">Admission Information</h6>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-3">
                <div class="input-icons">
                  <h5>Full Name </h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Full Name"
                    className="input-filed"
                    {...register("full_name", { required: true })}
                  />
                  {errors.full_name && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                  <h5>Student Id</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Student Id"
                    className="input-filed"
                    {...register("id", { required: true })}
                  />
                  {errors.id && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                  <h5>Cell No</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Mobile No"
                    className="input-filed"
                    {...register("mobile", { required: true })}
                  />
                  {errors.mobile && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                {/* Department */}
                <div class="input-icons">
                  <h5>Department</h5>
                  <i class="fa fa-user icon"></i>
                  <select
                    className="input-filed"
                    {...register("department", { required: true })}
                  >
                    <option value="cst">CST</option>
                    <option value="tct">TCT</option>
                    <option value="other">other</option>
                  </select>
                  {errors.department && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                    {/* Semester */}
                <div class="input-icons">
                  <h5>Semester</h5>
                  <i class="fa fa-user icon"></i>
                  <select
                    className="input-filed"
                    {...register("semester", { required: true })}
                  >
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                  </select>
                  {errors.semester && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                    {/* Shift */}
                <div class="input-icons">
                  <h5>Shift</h5>
                  <i class="fa fa-user icon"></i>
                  <select
                    className="input-filed"
                    {...register("shift", { required: true })}
                  >
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    
                  </select>
                  {errors.shift && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                {/* Email */}
                <div class="input-icons">
                  <h5>Email</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="input-filed"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                  <h5>Password</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-filed"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                  <h5>Confirm Password</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type={"password"}
                    placeholder="Confirm Password"
                    className="input-filed"
                    {...register("confirm_password", { required: true })}
                  />
                  {errors.confirm_password && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                    {/* Blood Group */}
                    <div class="input-icons">
                  <h5>Blood Group</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type={"text"}
                    placeholder="Blood Group"
                    className="input-filed"
                    {...register("blood_group", { required: true })}
                  />
                  {errors.blood_group && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                    {/* Batch No */}
                <div class="input-icons">
                  <h5>Batch</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type="text"
                    placeholder="Batch"
                    className="input-filed"
                    {...register("batch", { required: true })}
                  />
                  {errors.batch && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                {/* Gender */}
                <div class="input-icons">
                  <h5>Gender</h5>
                  <i class="fa fa-user icon"></i>
                  <select
                    className="input-filed"
                    {...register("gender", { required: true })}
                  >
                    <option value="first">Male</option>
                    <option value="second">Female</option>
                    
                  </select>
                  {errors.gender && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                     {/* Date Of Birth */}
                <div class="input-icons">
                  <h5>Date Of Birth</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type="date"
                    placeholder="Date Of Birth"
                    className="input-filed"
                    {...register("date_of_birth", { required: true })}
                  />
                  {errors.date_of_birth && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                    
                    {/* Student Photo */}
                <div class="input-icons">
                  <h5>Student Photo</h5>
                  {/* <i class="fa fa-user icon"></i> */}
                  <input
                    type={"file"}
                    placeholder="Student Photo"
                    className="input-filed"
                    {...register("image", { required: true })}
                  />
                  {errors.image && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                 {/* Nationality */}
                 <div class="input-icons">
                  <h5>Nationality</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    type={"text"}
                    placeholder="Nationality"
                    className="input-filed"
                    {...register("nationality", { required: true })}
                  />
                  {errors.nationality && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                {/* Student NID */}
                <div class="input-icons">
                  <h5>Student NID</h5>
                  {/* <i class="fa fa-user icon"></i> */}
                  <input
                    type={"file"}
                    placeholder="Student NID"
                    className="input-filed"
                    {...register("student_nid", { required: true })}
                  />
                  {errors.student_nid && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                {/* Student Registration Card*/}
                <div class="input-icons">
                  <h5>Student Reg. Card</h5>
                  {/* <i class="fa fa-user icon"></i> */}
                  <input
                    type={"file"}
                    placeholder="Student Registration Card"
                    className="input-filed"
                    {...register("student_reg", { required: true })}
                  />
                  {errors.student_reg && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                {/* Father/Mather Nid*/}
                <div class="input-icons">
                  <h5>Father/Mather NID</h5>
                  {/* <i class="fa fa-user icon"></i> */}
                  <input
                    type={"file"}
                    placeholder="Father/Mather NID"
                    className="input-filed"
                    {...register("guardian_nid", { required: true })}
                  />
                  {errors.guardian_nid && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                {/* Address */}
                <div class="input-icons">
                  <h5>Address</h5>
                  {/* <i class="fa fa-user icon"></i> */}
                  <textarea
                    type={"text"}
                  
                    className="input-filed"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                
              </div>

              <br />
              <input className="submitBtn" type="submit" />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admission;
