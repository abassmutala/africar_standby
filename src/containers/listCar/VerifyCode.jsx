import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
{
  /* <Uber>
  email => verify code sent => phone => verify code sent
</Uber> */
}

{
  /* <Bolt>
  Email, phone, city => First, last, lang, refCode, model, make, year, plate, ,colour 
  => licence number => photo, licence front, Back Side of Ghana Driver's License, proof of insurance, Roadworthiness Sticker, ghana card => 
</Bolt> */
}

export default function VerifyCode() {
  const [verificationCode, setVerificationCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // const handleCodeVerification = async () => {
  //   try {
  //     validateOTP(verificationCode);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white py-12 px-16 w-full max-w-xl mx-auto">
          <h3 className="AfricarTitle3">Verify Code</h3>
          <div className="pt-4">
            <p className="text-left mb-4">
              {/* Enter the 4-digit code sent to you at:
testingplaceholder21@gmail.com */}
              Enter the 4-digit code sent to you at{" "}
              {`${location.state.hostValues.phone}`}
            </p>
            <a href="" className="">
              <span className="text-primary-color">Change number</span>
            </a>
          </div>
          <form action="" method="POST" className="pt-8">
            <div className="grid grid-cols-6 gap-6 mt-8 mx-auto">
              <div className="col-span-full">
                <input
                  required
                  type="text"
                  id="verification_code"
                  name="verification_code"
                  className="w-full text-gray-700 bg-white rounded-md shadow-sm"
                  max={4}
                  // onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              {/* <div className="aspect-square">
                <input
                  required
                  type="text"
                  id="verification_code"
                  name="verification_code"
                  className="w-full text-gray-700 bg-white rounded-md shadow-sm"
                  // onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <div className="aspect-square">
                <input
                  required
                  type="text"
                  id="verification_code"
                  name="verification_code"
                  className="w-full text-gray-700 bg-white rounded-md shadow-sm"
                  // onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <div className="aspect-square">
                <input
                  required
                  type="text"
                  id="verification_code"
                  name="verification_code"
                  className="w-full text-gray-700 bg-white rounded-md shadow-sm"
                  // onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div> */}
              <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
                {/* <button
                  type="button"
                  className="btn-med btn-outlined"
                  onClick={() => navigate(-1)}
                  disabled={isLoading}
                >
                  <span className="truncate">Back</span>
                </button> */}
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  // onClick={handleCodeVerification}
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
