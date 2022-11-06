import React from "react";
import Navbar from "../../components/Navbar";
import {
  emailInvalidText,
  emailRequiredText,
  nameRequiredText,
  passwordInvalidText,
  passwordRequiredText,
  phoneRequiredText,
  validEmail,
  validPassword,
} from "../../utils";
import { MdOutlineVisibility } from "react-icons/md";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useState } from "react";

export default function HostInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const { registerHost } = HostAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreateHost = async (e) => {
    e.preventDefault();
    if (!name) {
      return setError(nameRequiredText);
    } else if (!email) {
      return setError(emailRequiredText);
    } else if (!validEmail.test(email)) {
      return setError(emailInvalidText);
    } else if (!phone) {
      return setError(phoneRequiredText);
    } else if (!password) {
      return setError(passwordRequiredText);
    } else if (!validPassword.test(password)) {
      return setError(passwordInvalidText);
    }

    try {
      setError("");
      setIsLoading(true);
      // await registerHost(email, password);
    } catch (error) {
      //   setIsLoading(false);
      alert(error.message);
      return;
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white py-12 px-16 w-full max-w-xl mx-auto">
          <h3 className="AfricarTitle3">Personal Information</h3>
          <div className="pt-4">
            <p className="text-left">
              Fill in the fileds below with your personal details
            </p>
          </div>
          <form onSubmit={handleCreateHost} method="POST" className="pt-8">
            <div className="grid grid-cols-6 gap-6 mt-8">
              {error && (
                <div className="col-span-full border border-amber-500 rounded-lg px-2 py-3">
                  <span className="text-amber-500 text-center AfricarTitle5">
                    {error}
                  </span>
                </div>
              )}
              <div className="col-span-6">
                <label htmlFor="Name" className="block">
                  Full Name/Rental Company name
                </label>
                <input
                  required
                  type="text"
                  id="Name"
                  name="name"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Username/Company name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  // onBlur={handleBlur}
                  disabled={isLoading}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Email" className="block">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="Email"
                  name="email"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onBlur={handleBlur}
                  disabled={isLoading}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Phone" className="block">
                  Phone number
                </label>
                <input
                  required
                  type="phone"
                  id="Phone"
                  name="phone"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  // onBlur={handleBlur}
                  disabled={isLoading}
                />
              </div>
              <div className="col-span-6 relative">
                <label htmlFor="Password" className="block">
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="Password"
                  name="password"
                  className="relative w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // onBlur={handleBlur}
                  disabled={isLoading}
                />
                <div className="absolute right-2 top-7 text-2xl rounded-full hover:bg-button-hover p-2 cursor-pointer">
                  <MdOutlineVisibility />
                </div>
              </div>
              <div id="recaptcha-container" className="col-span-6"></div>
              <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  onClick={handleCreateHost}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <span className="truncate">Next</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
