import React, { useState } from "react";

const AddEmployeeForm = () => {
  const [fullName, setFullName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [photo, setPhoto] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3 z-30">
      <button
        onClick={() => setOpen(true)}
        className={`px-4 py-2 text-white rounded ${open ? "cursor-not-allowed bg-blue-300" : "bg-blue-500"}`}
      >
        Add New Employee
      </button>

      <div
        className={`bg-gray-300 fixed top-12 right-0 w-72 shadow-sm p-4 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold mb-3">Add New Vehicle</h2>
        <form>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Full Name"
          />
          <input
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Occupation"
          />
          <input
            type=""
            id="image"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Plate Number"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-3 py-1 bg-green-500 text-white hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-1 bg-red-500 text-white hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;