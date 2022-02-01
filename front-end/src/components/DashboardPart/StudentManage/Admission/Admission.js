import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import SidebarManuHeder from "../../SidebarManuHeder/SidebarManuHeder";
import "./Admission.css";

const Admission = () => {
  const {
    register,
    handleSubmit,
    watch,
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
                  <h5>Full Name</h5>
                  <i class="fa fa-user icon"></i>
                  <input placeholder="Full Name"
                    className="input-filed"
                    {...register("full_name", { required: true })}
                  />
                  {errors.exampleRequired && (
                    <span style={{color:"red"}}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                <h5>Student Id</h5>
                  <i class="fa fa-user icon"></i>
                  <input placeholder="Student Id"
                    className="input-filed"
                    {...register("id", { required: true })}
                  />
                   {errors.exampleRequired && (
                    <span style={{color:"red"}}>This field is required</span>
                  )}
                </div>
                    
                    
                <div class="input-icons">
                <h5>Cell No</h5>
                  <i class="fa fa-user icon"></i>
                  <input placeholder="Mobile No"
                    className="input-filed"
                    {...register("mobile", { required: true })}
                  />
                  {errors.exampleRequired && (
                    <span style={{color:"red"}}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                <h5>Cell No</h5>
                  <i class="fa fa-user icon"></i>
                  <input placeholder="Email Id"
                    className="input-filed"
                    {...register("email", { required: true })}
                  />
                  {errors.exampleRequired && (
                    <span style={{color:"red"}}>This field is required</span>
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
