import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./chat/Nav";
import { useProfile } from "../context/profileContext";
import SelectAvatar from "./SelectAvatar";
const Profile = () => {

    const { userDetails } = useProfile();
 // console.log(userDetails);
 const [formData, setFormData] = useState({});
 const [selectedLink, setSelectedLink] = useState("");
 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value })
 };

 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 const response = await axios.put("/api/user/profile/update",{
 ...formData,
 avatarLink: selectedLink,
 });
 // Handle successful response (you may want to update stat
 // console.log(response.data);
 } catch (error) {
 // Handle error (you may want to show an error message)
 console.error(error);
 }
 };
 useEffect(() => {
 setFormData(userDetails);
 },[userDetails]);
 return (
 <div className="flex h-full min-h-screen bg-background">
 <Nav />
 <div className="bg-background w-[91%] flex items-center">
 <div className="max-w-xl mx-auto ">
 <h2 className="mb-4 text-2xl font-bold text-white">Update profile</h2>
    <form onSubmit={handleSubmit}>
 <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
 <div className="w-full">
 <label
 htmlFor="firstName"
 className="block mb-2 text-sm font-medium text-white">
 
 First Name
 </label>
 <input
 type="text"
 name="firstName"
 id="firstName"
className="w-full p-2.5 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
 value={formData?.firstName || ""}
 placeholder="First Name"
 onChange={handleChange}
 required
 />
 </div>
 <div className="w-full">
 <label
 htmlFor="lastName"
 className="block mb-2 text-sm font-medium text-white"
 >
 Last Name
 </label>
 <input
 type="text"
 name="lastName"
 id="lastName"
className="w-full p-2.5 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
 value={formData?.lastName || ""}
 placeholder="Last Name"
 onChange={handleChange}
 required
 />
 </div>
 <div className="sm:col-span-2">
 <label
 htmlFor="email"
 className="block mb-2 text-sm font-medium text-white"
 >
 Email
 </label>
 <input
 type="text"
 name="email"
 id="email"
 disabled
 className="w-full p-2.5 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
 value={userDetails?.email ||""}
 placeholder="Email"
 required
 />
 </div>
 </div>
 <SelectAvatar
 setSelectedLink={setSelectedLink}
 selectedLink={selectedLink}
 />
 <div className="flex items-center space-x-4">
 <button
 type="submit"
 className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5"
 >
 Update Profile
 </button>
 </div>
 </form>
 </div>
 </div>
 </div>
 );
};
export default Profile;
