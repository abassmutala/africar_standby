import React from "react";
import Navbar from "./../components/Navbar";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { logOut, currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white py-12 px-16 w-full max-w-2xl mx-auto">
          <div className="grid grid-cols-8 gap-6">
            <div className="col-span-2">
              <div className="relative rounded-full bg-gray-300 border-2 border-primary-color aspect-square">
                <div className="absolute inset-0">
                  <h3 className="AfricarTitle1">
                    {currentUser.email[0].toUpperCase()}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <h3 className="AfricarTitle3 truncate pb-4">Abass Mutala</h3>
              <h3 className="AfricarTitle5 truncate pb-4">
                {currentUser.email}
              </h3>
              <button className="btn-sm btn-flat">
                <span className="truncate">Edit</span>
              </button>
            </div>
            <hr className="col-span-full bg-grey-300"/>
            <div className=""></div>
            <div className="col-span-2 text-center">
              <h4 className="AfricarTitle4">2</h4>
              <span className="truncate">Trips</span>
            </div>
            <div className="col-span-2 text-center">
              <h4 className="AfricarTitle4">2</h4>
              <span className="truncate">Trips</span>
            </div>
            <div className="col-span-2 text-center">
              <h4 className="AfricarTitle4">2</h4>
              <span className="truncate">Trips</span>
            </div>
            <div className=""></div>
          </div>
          {/* <h3 className="AfricarTitle3">Profile</h3>
        <div className="pt-4 flex flex-col md:flex-row">
          <p className="text-left">
            Fill in the fileds below with your personal details
          </p>
        </div> */}
          {/* <form onSubmit={handleCreateHost} method="POST" className="pt-8">
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
        </form> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
