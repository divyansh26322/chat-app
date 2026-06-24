import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
const LandingNav = () => {
 const { isAuthenticated } = useAuth();
 return (
 <nav className="">
<div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
 <a
 className="flex items-center space-x-3 rtl:space-x-reverse"
 >
 <img
 src="https://flowbite.com/docs/images/logo.svg"
 className="h-8"
 alt="Swift Logo"
 />
 <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
 Swift-Chat
 </span>
 </a>
 <button
 data-collapse-toggle="navbar-default"
 type="button"
className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700"
 aria-controls="navbar-default"
 aria-expanded="false"
 >
 <span className="sr-only">Open main menu</span>
 <svg
 className="w-5 h-5"
 aria-hidden="true"
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 17 14"
 >
 <path
 stroke="currentColor"
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M1 1h15M1 7h15M1 13h15"
 />
 </svg>
 </button>
 <div
 className="hidden w-full md:flex md:w-auto gap-3"
 id="navbar-default"
 >
 <Link
 to={isAuthenticated ? "/chathome" : "/login"}
 className="block py-1 px-2 text-white hover:text-indigo-400"
 >
 {isAuthenticated ? "Home" : "Login"}
 </Link>
 <Link
  to="/contact"
  className="block py-1 px-2 text-white hover:text-indigo-400"
>
  Contact
</Link>
 </div>
 </div>
 </nav>
 );
};
export default LandingNav;
