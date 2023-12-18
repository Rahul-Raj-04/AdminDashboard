import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLogout = () => {
    // Perform logout logic here
    alert("Are you sure wan't   logged out!");
  };

  const profileToggle = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <>
      <div className="flex h-screen  shadow-2xl  w-64 flex-col fixed z-50 overflow-y-auto border-r bg-white  text-black px-5 py-8">
        <div className="flex flex-row gap-8" to="#">
          <img src="https://flowbite.com/docs/images/logo.svg" alt=""></img>
          <h1 className="text-xl font-bold">BRAND NAME</h1>
        </div>

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-black">
                analytics
              </label>
              <NavLink
                className="flex transform items-center rounded-lg px-3 py-2 text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-black hover:shadow-lg"
                to="/DashBoard"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </NavLink>
              <NavLink
                className="flex transform items-center hover:shadow-lg rounded-lg px-3 py-2 text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-black"
                to="/Order"
              >
                <Wallet className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">ORDER</span>
              </NavLink>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-black">
                content
              </label>
              <NavLink
                className="flex transform items-center hover:shadow-lg rounded-lg px-3 py-2 text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-black"
                to="/Banner"
              >
                <Newspaper className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">BANNER</span>
              </NavLink>
              <NavLink
                className="flex transform items-center hover:shadow-lg rounded-lg px-3 py-2 text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-black"
                to="#"
              >
                <BellRing className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Notifications</span>
              </NavLink>
              <NavLink
                className="flex transform items-center hover:shadow-lg rounded-lg px-3 py-2 text-blacktransition-colors duration-300 hover:bg-gray-100 hover:text-gray-black"
                to="#"
              >
                <Paperclip className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Checklists</span>
              </NavLink>
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-black">
                Customization
              </label>
              <NavLink
                className="flex transform items-center hover:shadow-lg rounded-lg px-3 py-2 text-blacktransition-colors duration-300 hover:bg-gray-100 hover:text-gray-black"
                to="#"
              >
                <Brush className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Themes</span>
              </NavLink>
              <NavLink
                onClick={toggleDropdown}
                className="flex transform items-center  hover:shadow-lg rounded-lg px-3 py-2 text-blacktransition-colors duration-300 hover:bg-gray-100 hover:text-gray-black"
                to="#"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Setting</span>
              </NavLink>
              {showDropdown && (
                <div className="origin-left-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <NavLink
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-black"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-black"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      <div className="w-[calc(100%-16rem)] h-[80px] bg-[#343a40] fixed z-50 top-0 ml-[255px] flex flex-row justify-between cursor-pointer text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 w my-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <NavLink to="#">
          <img
            onClick={profileToggle}
            className="h-10 w-10 rounded-full object-cover mr-4 my-4 flex justify-center"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="User avatar"
          />
        </NavLink>{" "}
        {profileDropdown && (
          <div className="origin-top-right absolute right-0 mt-16 w-[140px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <NavLink
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-black"
              >
                Profile
              </NavLink>
              <NavLink
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-black"
              >
                Logout
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
