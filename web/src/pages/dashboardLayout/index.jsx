import React, { useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <SideBar open={open} setOpen={setOpen}/>
        <TopBar open={open} setOpen={setOpen}/>
        <main className="mt-14 sm:ml-44">
          <Outlet />
        </main>
    </div>
  );
};

export default DashboardLayout;
