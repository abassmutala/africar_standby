import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Security() {
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      {console.log(location.state)}
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white py-12 px-16 w-full max-w-xl mx-auto">
          <h3 className="AfricarTitle3">Security Information</h3>
          <div className="pt-4">
            <p className="text-left">
              Choose a strong password. Password should include letters, numbers
              and symbols.
            </p>
          </div>
          <form action="" className="pt-8">
            <div className="grid grid-cols-6 gap-6 mt-8">
              <div className="col-span-6">
                <label htmlFor="Password" className="block">
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="Password"
                  name="password"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="confirm_password" className="block">
                  Confirm Password
                </label>
                <input
                  required
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Password"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  // onClick={}
                >
                  <span className="truncate">Next</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
