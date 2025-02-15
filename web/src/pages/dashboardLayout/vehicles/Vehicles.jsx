import React from 'react'
import Pagination from '../../../components/pagination/Pagination'
import AddVehicleForm from '../../../components/vehicles-dashboard/AddVehicleForm'
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";

const Vehicles = () => {
  return (
    <section className="container px-4">
      <AddVehicleForm/>
      <div className="w-full overflow-hidden rounded-md">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border border-gray-200">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
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
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                <td className="text-lg border">
                  <Link to={'/dashboard/employees/5'} className="flex items-center justify-center"><IoEye/></Link>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full">
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
                      <p className="font-semibold text-black">Stevens</p>
                      <p className="text-xs text-gray-600">Programmer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-md font-semibold border">27</td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                    {" "}
                    Pending{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                <td className="text-lg border">
                  <Link to={'/dashboard/employees/5'} className="flex items-center justify-center"><IoEye/></Link>
                </td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full">
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
                      <p className="font-semibold">Nora</p>
                      <p className="text-xs text-gray-600">Designer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-md font-semibold border">17</td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    {" "}
                    Nnacceptable{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                <td className="text-lg border">
                  <Link to={'/dashboard/employees/5'} className="flex items-center justify-center"><IoEye/></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-3 flex justify-end">
        <Pagination 
          pages = {5}
          route = '/dashboard/employees'
          pageNumber = {4}
        />
      </div>
    </section>
  )
}

export default Vehicles