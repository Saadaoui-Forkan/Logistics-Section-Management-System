import React, { useContext } from "react";
import Pagination from "../../../components/pagination/Pagination";
import AddEmployeeForm from "../../../components/employees-dashboard/AddEmployeeForm";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import useModal from "../../../hooks/useModal";
import AppContext from "../../../context/AppContext";
import Alert from "../../../components/error";

const Employees = () => {
  const { successMsg } = useContext(AppContext)
  const { open, handleOpenModal, setOpen } = useModal()
  return (
    <section className="container">
      {open && (
        <AddEmployeeForm 
          handleOpenModal={handleOpenModal} 
          setOpen={setOpen} 
        />
      )}
      {successMsg && <Alert message={successMsg} success/>}
      <button
        onClick={handleOpenModal}
        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 my-2 rounded-lg transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add New Employee
      </button>
      <div className="w-full overflow-hidden rounded-md">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border border-gray-200">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Joining Date</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Sufyan</p>
                      <p className="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                <td className="text-lg border">
                  <Link
                    to={"/dashboard/employees/5"}
                    className="flex items-center justify-center"
                  >
                    <IoEye />
                  </Link>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Sufyan</p>
                      <p className="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                <td className="text-lg border">
                  <Link
                    to={"/dashboard/employees/5"}
                    className="flex items-center justify-center"
                  >
                    <IoEye />
                  </Link>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Sufyan</p>
                      <p className="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                <td className="text-lg border">
                  <Link
                    to={"/dashboard/employees/5"}
                    className="flex items-center justify-center"
                  >
                    <IoEye />
                  </Link>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Sufyan</p>
                      <p className="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                <td className="text-lg border">
                  <Link
                    to={"/dashboard/employees/5"}
                    className="flex items-center justify-center"
                  >
                    <IoEye />
                  </Link>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Sufyan</p>
                      <p className="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                <td className="text-lg border">
                  <Link
                    to={"/dashboard/employees/5"}
                    className="flex items-center justify-center"
                  >
                    <IoEye />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-3 flex justify-end">
        <Pagination pages={5} route="/dashboard/employees" pageNumber={2} />
      </div>
    </section>
  );
};

export default Employees;