import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardLayout from "./pages/dashboardLayout";
import Dashboard from "./pages/dashboardLayout/dashboard";
import Employees from "./pages/dashboardLayout/employees/Employees";
import SingleEmployee from "./pages/dashboardLayout/employees/SingleEmployee";
import EmployeesStatus from "./pages/dashboardLayout/employees/EmployeesStatus";
import Vehicles from "./pages/dashboardLayout/vehicles/Vehicles";
import SingleVehicle from "./pages/dashboardLayout/vehicles/SingleVehicle";
import VehiclesStatus from "./pages/dashboardLayout/vehicles/VehiclesStatus";
import Tracking from "./pages/dashboardLayout/Tracking";
import { useContext } from "react";
import AppContext from "./context/AppContext";

const Router = () => {
  const { auth } = useContext(AppContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !auth ? <LoginPage /> : <Navigate to="/dashboard" />,
    },
    {
      path: "/register",
      element: !auth ? <RegisterPage /> : <Navigate to="/dashboard" />,
    },
    {
      path: "/dashboard",
      element: auth ? <DashboardLayout /> : <Navigate to="/" />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "employees/:id",
          element: <SingleEmployee />,
        },
        {
          path: "employees-status",
          element: <EmployeesStatus />,
        },
        {
          path: "vehicles",
          element: <Vehicles />,
        },
        {
          path: "vehicles/:id",
          element: <SingleVehicle />,
        },
        {
          path: "vehicles-status",
          element: <VehiclesStatus />,
        },
        {
          path: "tracking",
          element: <Tracking />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
