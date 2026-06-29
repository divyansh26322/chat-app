import {
 createBrowserRouter,
 RouterProvider,
 Outlet,
 ScrollRestoration,
} from "react-router-dom";
import './App.css';
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

import { Toaster } from "react-hot-toast";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import { AuthProvider, useAuth } from "./context/authContext.jsx";
import axios from "axios";
import ChatHome from "./pages/ChatHome.jsx";
import { ProfileProvider } from "./context/profileContext.jsx";
import { useEffect } from "react";
import Profile from "./components/Profile.jsx";
import { baseUrl } from "../apiConfig.js";

import AiPage from "./pages/AiPage.jsx";

 const Layout = () => {
 const { isAuthenticated, checkAuth } = useAuth();
 useEffect(() => {
 checkAuth();
 }, [isAuthenticated]);
 return (
 <>
 <ScrollRestoration />
 <Outlet />
 </>
 );
};
const router = createBrowserRouter([
 {
 path: "/",
 element: <Layout />,
 children: [
 {
 path: "/",
 element: <Home />,
 },
 {
 path: "register",
 element: <Register />,
 },
 {
 path: "login",
 element: <Login />,
 },
 {
 path: "users/:id/verify/:token",
 element: <VerifyEmail />,
 },
 {
 path: "chathome",
 element: <ChatHome />,
 },
 {
 path: "profile",
 element: <Profile />,
 },
 {
  path: "/ai",
  element: <AiPage />
},
 ],
 },
]);
function App() {
 axios.defaults.baseURL = baseUrl;
 axios.defaults.withCredentials = true;
 return (
 <>
 <AuthProvider>
 <ProfileProvider>
 <RouterProvider router={router} />
 <Toaster />
 </ProfileProvider>
 </AuthProvider>
 </>
 );
}
export default App;
