import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ text, count, link }) => {
  return (
    <div className="m-2 bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold text-gray-800">{text}</h2>
      <p className="text-xl font-bold text-slate-700 my-4">{count}</p>
      <Link
        to={link}
        className="text-blue-500 hover:underline text-sm font-medium"
      >
        Explore more →
      </Link>
    </div>
  );
};

export default DashboardCard;
