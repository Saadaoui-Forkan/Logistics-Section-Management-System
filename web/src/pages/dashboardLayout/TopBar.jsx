import React, { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../features/auth";
import Spinner from "../../components/spinner";
import AppContext from "../../context/AppContext";

const TopBar = ({ open, setOpen }) => {
  const { logout } = useContext(AppContext)
  const { mutate, isPending } = useLogoutMutation();
  const handleClick = () => {
    mutate( undefined, { onSuccess: () => logout() });
  };
  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="fixed top-0 w-full h-12 z-30 flex items-center justify-between px-2 bg-slate-400 shadow">
          <ul className="flex items-center">
            <li className="flex items-center">
              <div
                className="sm:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`w-5 h-[2px] bg-gray-800 transition-transform duration-300 ${
                    open ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                ></span>
                <span
                  className={`w-5 h-[2px] bg-gray-800 transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`w-5 h-[2px] bg-gray-800 transition-transform duration-300 ${
                    open ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                ></span>
              </div>
              <Link
                to="/dashboard"
                className="ml-2 text-sm sm:text-md font-bold text-gray-800"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="text-gray-700 relative">
              <IoIosNotifications className="text-lg" />
              <span className="absolute -top-2 left-2 rounded-full w-4 h-4 bg-red-600 text-[10px] text-gray-50 flex items-center justify-center">
                10
              </span>
            </li>
            <li className="text-gray-700 text-sm sm:text-md mx-2 sm:mx-5">
              Mahmoud Saadaoui
            </li>
            <li
              className="text-sm sm:text-md text-blue-500 font-bold cursor-pointer"
              onClick={handleClick}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TopBar;
