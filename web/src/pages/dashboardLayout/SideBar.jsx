import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ open }) => {
  return (
    <div
      className={`fixed top-0 h-full z-10 sm:translate-x-0 w-40 bg-slate-300 text-slate-800 shadow-lg transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-40"
      }`}
    >
      {" "}
      <ul className="flex flex-col space-y-4">
        <li className="p-2 mt-12 hover:bg-gray-100">
          <Link
            to="/dashboard/employees"
            className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
          >
            Employees
          </Link>
        </li>
        <li className="p-2 hover:bg-gray-100">
          <Link
            to="/dashboard/vehicles"
            className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
          >
            Vehicles
          </Link>
        </li>
        <li className="p-2 hover:bg-gray-100">
          <Link
            to="/dashboard/employees-status"
            className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
          >
            Employees Status
          </Link>
        </li>
        <li className="p-2 hover:bg-gray-100">
          <Link
            to="/dashboard/vehicles-status"
            className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
          >
            Vehicles Status
          </Link>
        </li>
        <li className="p-2 hover:bg-gray-100">
          <Link
            to="/dashboard/tracking"
            className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
          >
            Tracking
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
