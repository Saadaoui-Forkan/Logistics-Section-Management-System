import React from "react";
import Notifications from "./Notifications";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap">
        <DashboardCard text="Employees" count={21} link="/dashboard/employees" />
        <DashboardCard text="Vehicles" count={11} link="/dashboard/vehicles" />
        <DashboardCard text="Vehicles on duty" count={2} link="/dashboard/tracking" />
      </div>
      <Notifications />
    </div>
  );
};

export default Dashboard;