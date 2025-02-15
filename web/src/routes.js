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
import Users from "./pages/dashboardLayout/employees/Users";
import SingleEmployee from "./pages/dashboardLayout/employees/SingleEmployee";
import UsersStatus from "./pages/dashboardLayout/employees/UsersStatus";
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
      // element: <LoginPage />
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
          element: <Users />,
        },
        {
          path: "employees/:id",
          element: <SingleEmployee />,
        },
        {
          path: "employees-status",
          element: <UsersStatus />,
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
