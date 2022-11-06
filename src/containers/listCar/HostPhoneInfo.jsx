import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { validEmail, validPassword } from "../../utils";
import Navbar from "../../components/Navbar";

export default function HostPhoneInfo() {
  const location = useLocation();
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const handleImageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setProfilePhoto(e.target.files[0]);
  //   }
  // };

  const _handleNext = async (_event) => {
    _event.preventDefault();
    try {
      setIsLoading(true);
      /* TODO: handle this in a better way, maybe redux */
      // const carValues = location.state.carValues;
      const hostValues = {
        fullName: fullName,
        email: email,
        phone: phoneNumber,
        password: password,
      };
      setIsLoading(false);
      navigate("/verify-code", { state: { hostValues } });
      // return;
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      {/* <section className="py-8 lg:lg:py-12">
        {stepper()}
        <form action="" className="max-w-screen-lg mx-auto">
          <FormSection
            title="Profile"
            description="Information here includes your personal data. Information provided here will be shown publicly"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
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
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="email" className="block">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    id="Email"
                    name="email"
                    className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label required for="phone" className="block">
                    Phone number
                  </label>
                  <input
                    required
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="profile_photo" className="block">
                    Upload profile photo
                  </label>
                  <input
                    required
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,"
                    id="profile_photo"
                    name="email"
                    className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                    onChange={handleImageChange}
                  />
                </div>
                {profilePhoto && (
                  <div className="col-span-full flex flex-col justify-center items-center">
                    <div className="col-span-full relative flex items-center justify-center w-80 h-80 bg-gray-900 rounded-lg shadow-lg shadow-primary-color-light-200 mx-auto overflow-hidden mt-8">
                      <img
                        src={URL.createObjectURL(profilePhoto)}
                        alt="profile"
                        class="absolute inset-0 object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <span className="col-span-full w-full mx-auto AfricarTitle5 text-center mt-8">
                      Your profile photo
                    </span>
                  </div>
                )}
              </div>
            }
            buttons={
              <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  onClick={() =>
                    navigate("register-car", {
                      state: {
                        fullName: fullName,
                        email: email,
                        phone: phoneNumber,
                        profilePhoto: profilePhoto,
                      },
                    })
                  }
                >
                  <span className="truncate">Next</span>
                </button>
              </div>
            }
          />
        </form>
      </section> */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white py-12 px-16 w-full max-w-xl mx-auto">
          <h3 className="AfricarTitle3">Personal Information</h3>
          <div className="pt-4">
            <p className="text-left">
              Fill in the fileds below with your personal details
            </p>
          </div>
          <form onSubmit={_handleNext} className="pt-8">
            <div className="grid grid-cols-6 gap-6 mt-8">
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="email" className="block">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  id="Email"
                  name="email"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Email address"
                  pattern={validEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="col-span-6">
                <label required for="phone" className="block">
                  Phone number
                </label>
                <input
                  required
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={isLoading}
                />
              </div>
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
                  pattern={validPassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {/* <div className="col-span-6">
                <label htmlFor="profile_photo" className="block">
                  Upload profile photo
                </label>
                <input
                  required
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,"
                  id="profile_photo"
                  name="email"
                  className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
                  onChange={() => handleImageChange}
                />
                {$imagePreview}
              </div> */}
              <div className="col-span-6 flex items-center justify-between mt-6 border-t-2 pt-6">
                <button
                  type="button"
                  className="btn-med btn-outlined"
                  onClick={() => navigate(-1)}
                  disabled={isLoading}
                >
                  <span className="truncate">Back</span>
                </button>
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  onClick={_handleNext}
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

  // function stepper() {
  //   return (
  //     <div>
  //       <h2 className="sr-only">Steps</h2>
  //       <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
  //         <ol className="grid grid-cols-3 font-medium text-gray-500">
  //           <li className="relative text-left text-primary-color">
  //             <span className="absolute left-0 -bottom-[1.75rem] rounded-full bg-primary-color text-white">
  //               <svg
  //                 className="h-5 w-5"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 20 20"
  //                 fill="currentColor"
  //               >
  //                 <path
  //                   fillRule="evenodd"
  //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
  //                   clip-rule="evenodd"
  //                 />
  //               </svg>
  //             </span>

  //             <span className="block"> Host Info </span>
  //           </li>

  //           <li className="relative text-center">
  //             <span className="absolute left-1/2 -bottom-[1.75rem] -translate-x-1/2 rounded-full bg-gray-300 text-white">
  //               <svg
  //                 className="h-5 w-5"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 20 20"
  //                 fill="currentColor"
  //               >
  //                 <path
  //                   fillRule="evenodd"
  //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
  //                   clip-rule="evenodd"
  //                 />
  //               </svg>
  //             </span>

  //             <span className="block"> Car Info </span>
  //           </li>

  //           <li className="relative text-right">
  //             <span className="absolute right-0 -bottom-[1.75rem] rounded-full bg-gray-300 text-white">
  //               <svg
  //                 className="h-5 w-5"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 20 20"
  //                 fill="currentColor"
  //               >
  //                 <path
  //                   fillRule="evenodd"
  //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
  //                   clip-rule="evenodd"
  //                 />
  //               </svg>
  //             </span>

  //             <span className="block"> Payment </span>
  //           </li>
  //         </ol>
  //       </div>
  //     </div>
  //   );
  // }
}

// import React, { Component } from "react";
// import FormSection from "../../components/FormSection";
// import { createHostProfile } from "../../services/db";

// export default class HostPhoneInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       file: "",
//       imagePreviewUrl: "",
//     };

//     this.handleFullNameChange = this.handleFullNameChange.bind(this);
//     this.handleEmailChange = this.handleEmailChange.bind(this);
//     this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
//     this.handleImageChange = this.handleImageChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleFullNameChange(event) {
//     this.setState({ fullName: event.target.value });
//   }

//   handleEmailChange(event) {
//     this.setState({ email: event.target.value });
//   }
//   handlePhoneNumberChange(event) {
//     this.setState({ phoneNumber: event.target.value });
//   }

//   handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result,
//       });
//     };

//     reader.readAsDataURL(file);
//   }

//   addHost = async () => {
//     try {
//       // setIsLoading(true);
//       const profileData = {
//         name: this.state.fullName,
//         email: this.state.email,
//         phone: this.state.phoneNumber,
//         photo: this.state.imagePreviewUrl,
//       };
//       await createHostProfile("ilrLfJzBrhXpSzOPzacQh4iEgb92", profileData);
//       // setIsLoading(false);
//       alert("Congratulations, you are now a Africar host!!");
//       return;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   handleSubmit(event) {
//     console.log(this.state);
//     event.preventDefault();
//     this.addHost()
//     // navigate("/car-info", { state: this.state });
//     // this.props.navigation.navigate("car-info");
//   }

//   render() {
//     let { imagePreviewUrl } = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       console.log(this.state);
//       $imagePreview = (
//         <div className="flex flex-col justify-center items-center">
//           <div className="col-span-full relative flex items-center justify-center w-80 h-80 bg-gray-900 rounded-lg shadow-lg shadow-primary-color-light-200 mx-auto overflow-hidden mt-8">
//             <img
//               src={imagePreviewUrl}
//               alt={imagePreviewUrl}
//               class="absolute inset-0 object-cover w-full h-full rounded-lg"
//             />
//           </div>
//           <span className="col-span-full w-full mx-auto AfricarTitle5 text-center mt-8">
//             Your profile photo
//           </span>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <section className="py-8 lg:lg:py-12">
//           <div>
//             <h2 className="sr-only">Steps</h2>
//             <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
//               <ol className="grid grid-cols-3 font-medium text-gray-500">
//                 <li className="relative text-left text-primary-color">
//                   <span className="absolute left-0 -bottom-[1.75rem] rounded-full bg-primary-color text-white">
//                     <svg
//                       className="h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </span>

//                   <span className="block"> Host Info </span>
//                 </li>

//                 <li className="relative text-center">
//                   <span className="absolute left-1/2 -bottom-[1.75rem] -translate-x-1/2 rounded-full bg-gray-300 text-white">
//                     <svg
//                       className="h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </span>

//                   <span className="block"> Car Info </span>
//                 </li>

//                 <li className="relative text-right">
//                   <span className="absolute right-0 -bottom-[1.75rem] rounded-full bg-gray-300 text-white">
//                     <svg
//                       className="h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </span>

//                   <span className="block"> Payment </span>
//                 </li>
//               </ol>
//             </div>
//           </div>
//           <form action={this.handleSubmit} className="max-w-screen-lg mx-auto">
//             <FormSection
//               title="Profile"
//               description="Information here includes your personal data. Information provided here will be shown publicly"
//               inputs={
//                 <div className="grid grid-cols-6 gap-6 mt-8">
//                   <div className="col-span-6">
//                     <label htmlFor="Name" className="block">
//                       Full Name/Rental Company name
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       id="Name"
//                       name="name"
//                       className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
//                       value={this.state.fullName}
//                       onChange={this.handleFullNameChange}
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="email" className="block">
//                       Email address
//                     </label>
//                     <input
//                       required
//                       type="email"
//                       id="Email"
//                       name="email"
//                       className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
//                       value={this.state.email}
//                       onChange={this.handleEmailChange}
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-3">
//                     <label required htmlFor="phone" className="block">
//                       Phone number
//                     </label>
//                     <input
//                       required
//                       type="phone"
//                       id="phone"
//                       name="phone"
//                       className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
//                       value={this.state.phoneNumber}
//                       onChange={this.handlePhoneNumberChange}
//                     />
//                   </div>
//                   <div className="col-span-6">
//                     <label htmlFor="profile_photo" className="block">
//                       Upload profile photo
//                     </label>
//                     <input
//                       required
//                       type="file"
//                       accept="image/jpeg,image/jpg,image/png,"
//                       id="profile_photo"
//                       name="email"
//                       className="w-full mt-1 text-gray-700 bg-white rounded-md shadow-sm"
//                       onChange={this.handleImageChange}
//                     />
//                     {$imagePreview}
//                   </div>
//                 </div>
//               }
//               buttons={
//                 <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
//                   <button
//                     type="submit"
//                     className="btn-med btn-elevated"
//                     onClick={this.handleSubmit}
//                   >
//                     <span className="truncate">Next</span>
//                   </button>
//                   {/* <Link
//                     className="inline-block whitespace-nowrap rounded-lg bg-primary-color text-white text-base transition duration-300 ease-out border-none ring-1 ring-primary-color shrink-0 hover:shadow-primary-color-light-100 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring px-12 py-3"
//                     to="/become-a-host/list/register-car"
//                     state={this.state}
//                   >
//                     <span className="truncate">Next</span>
//                   </Link> */}
//                 </div>
//               }
//             />
//           </form>
//         </section>
//       </div>
//     );
//   }
// }
