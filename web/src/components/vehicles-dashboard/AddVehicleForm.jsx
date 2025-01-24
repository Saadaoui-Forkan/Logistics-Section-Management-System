import React, { useState } from "react";

const AddVehicleForm = () => {
  const [model, setModel] = useState("");
  const [mark, setMark] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [year, setYear] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3 z-30">
      <button
        onClick={() => setOpen(true)}
        className={`px-4 py-2 text-white rounded ${open ? "cursor-not-allowed bg-blue-300" : "bg-blue-500"}`}
      >
        Add New Vehicle
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
            id="mark"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Vehicle Mark"
          />
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Vehicle Model"
          />
          <input
            type="text"
            id="plateNumber"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Plate Number"
          />
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full mb-3 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            placeholder="Build Year"
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

export default AddVehicleForm;