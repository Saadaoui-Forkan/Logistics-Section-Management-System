import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Notifications = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Tasks</h2>
      <ul className="space-y-4 w-full">
        {[1, 2, 3].map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center w-full p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            <strong className="block text-gray-800">Task num {task}</strong>
            <span className="text-sm text-gray-500">00-00-0000</span>

            <div className="flex space-x-2">
              <MdDelete className="text-red-500 cursor-pointer hover:text-red-600" />
              <FiEdit className="text-blue-500 cursor-pointer hover:text-blue-600" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
