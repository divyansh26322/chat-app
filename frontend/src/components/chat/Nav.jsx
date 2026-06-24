// Nav.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
 const { logout, isAuthenticated } = useAuth();
 const [isMobile, setIsMobile] = useState(true);
 const navigate = useNavigate();
 useEffect(() => {
 if (!isAuthenticated) {
 navigate("/");
 }
 }, [isAuthenticated]);
 return (
 <>
 <button
 onClick={() => setIsMobile(!isMobile)}
 className="flex fixed bottom-5 left-5 h-10 aspect-square lg:hidden items-center justify-center bg-indigo-600 rounded-full text-white z-50"
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="w-6 h-6"
 >
 <path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
/>
 </svg>
 </button>
 {isMobile && (
<header className="fixed h-screen w-37.5 z-40 lg:static bg-background border-r border-gray-700">
 <Link
 to="/"
 className="flex gap-2 items-center justify-center "
 >
 <img
 src="https://flowbite.com/docs/images/logo.svg"
 className="h-8"
 alt="Swift Logo"
 />
 <span className="font-semibold text-xl mr-2">Swift</span>
 </Link>
 <nav className="h-full flex flex-col my-4 justify-between">
 <div className="flex flex-col gap-5 ">
 <Link to="/profile" className="flex items-end gap-2">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="w-6 h-6"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
 />
 </svg>
 <span>Profile</span>
 </Link>
 <Link to="/chathome" className="flex gap-1">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="w-6 h-6"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
 />
 </svg>
 <span>Chats</span>
 </Link>
 </div>
 <Link className="flex items-end gap-1 mb-14">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="w-6 h-6"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
 />
 </svg>
 <button onClick={logout}>Logout</button>
 </Link>
 </nav>
</ header>
 )}
 </>
 );
};
export default Nav;