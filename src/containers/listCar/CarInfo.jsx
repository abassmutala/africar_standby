import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../../components/FormSection";
import CarLocationMap from "./CarLocationMap";
import Navbar from "./../../components/Navbar";
import { LoadingSpinner } from "./../../components/LoadingSpinner";
import { getCarMakes } from "../../services/DB";

const makes = [
  { value: "", name: "--- Select manufacturer ---" },
  { value: "bmw", name: "BMW" },
  { value: "ford", name: "Ford" },
  { value: "honda", name: "Honda" },
  { value: "hyundai", name: "Hyundai" },
  { value: "mercedes_benz", name: "Mercedes Benz" },
  { value: "toyota", name: "Toyota" },
];

export default function CarInfo() {
  const navigate = useNavigate();
  // let location = useLocation();

  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [description, setDescription] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);
  const [licenceCode, setLicenceCode] = useState(null);
  const [vIN, setVIN] = useState(null);
  const [carPhotos, setCarPhotos] = useState(null);
  const [carLocation, setCarLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = (e) => {
  // e.preventDefault();

  //   navigate("listing-summary", { state: { props } });
  // };

  const _handleSubmit = async (_event) => {
    _event.preventDefault();
    try {
      setIsLoading(true);
      const carValues = {
        make: make,
        model: model,
        year: year,
        description: description,
        plateNumber: plateNumber,
        licenceCode: licenceCode,
        VIN: vIN,
        carPhotos: carPhotos,
        carLocation: carLocation,
      };
      setIsLoading(false);
      navigate("/register-host", { state: { carValues } });
      // return;
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="mt-16">
      <Navbar />
      <section className="py-8 lg:py-12">
        <div>
          <h2 className="sr-only">Steps</h2>
          <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
            <ol className="grid grid-cols-3 font-medium text-gray-500">
              <li className="relative text-left text-primary-color">
                <span className="absolute left-0 -bottom-[1.75rem] rounded-full bg-primary-color text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="block"> Car Info </span>
              </li>

              <li className="relative text-center text-gray-500">
                <span className="absolute left-1/2 -bottom-[1.75rem] -translate-x-1/2 rounded-full bg-gray-300 text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="block"> Host Info </span>
              </li>

              <li className="relative text-right">
                <span className="absolute right-0 -bottom-[1.75rem] rounded-full bg-gray-300 text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="block"> Summary </span>
              </li>
            </ol>
          </div>
        </div>
        <form onSubmit={_handleSubmit} className="max-w-screen-lg mx-auto">
          <FormSection
            title="Car Info"
            description="Information here includes your personal biological data. Information provided here will be shown publicly"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="car_make" className="block text-gray-700">
                    Car Make/Manufacturer
                  </label>
                  <select
                    required
                    type="text"
                    id="car_make"
                    name="car_make"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Select your car's manufacturer"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    disabled={isLoading}
                    onClick={() => getCarMakes()}
                  >
                    {makes.map((make, index) => (
                      <option id={index} value={make.value}>
                        {make.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="car_model" className="block text-gray-700">
                    Car Model
                  </label>
                  <input
                    required
                    type="text"
                    id="car_model"
                    name="car_model"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder={`Select your ${make ?? "car"} model`}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="year_of_manufacture"
                    className="block text-gray-700"
                  >
                    Year of manufacture
                  </label>
                  <input
                    required
                    type="date"
                    id="year_of_manufacture"
                    name="year_of_manufacture"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Select your car's year of manufacture"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="description" className="block text-gray-700">
                    Car description
                  </label>
                  <textarea
                    required
                    rows={6}
                    type="date"
                    id="description"
                    name="description"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Provide a brief description of your car."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>
            }
          />
          <FormSection
            title="Car Registration"
            description="Information here includes your personal biological data. Information provided here will be shown publicly"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="plate_number" className="block text-gray-700">
                    Licence plate number
                  </label>
                  <input
                    required
                    type="text"
                    id="plate_number"
                    name="plate_number"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Enter your car's licence plate number"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="licence_number"
                    className="block text-gray-700"
                  >
                    Licence number
                  </label>
                  <input
                    required
                    type="text"
                    id="licence_number"
                    name="licence_number"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Enter your licence code"
                    value={licenceCode}
                    onChange={(e) => setLicenceCode(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="vin" className="block text-gray-700">
                    Vehicle Identification Number (VIN)
                  </label>
                  <input
                    required
                    type="text"
                    id="vin"
                    name="vin"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Enter your Vehicle Identification Number(VIN)"
                    value={vIN}
                    onChange={(e) => setVIN(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>
            }
          />
          <FormSection
            title="Car Photos"
            description="Provide clear, well-lit, high resolution photos of your car — successful hosts have at least 10 including:
          Exterior photos from all sides, Interior photos that show any unique features, Facility or fleet photos if you’re wish to share that you’re a business operating on Africar"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6">
                  <label
                    htmlFor="profile_photo"
                    className="block text-gray-700"
                  >
                    Upload car photos
                  </label>
                  <input
                    required
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,"
                    multiple
                    id="profile_photo"
                    name="photos"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Select nice photos of your car"
                    // onChange={this._handleImageChange}
                    disabled={isLoading}
                  />
                </div>
                {/* {$imagePreview} */}
              </div>
            }
          />
          <FormSection
            title="Car Location"
            description="Provide the location of your car."
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6">
                  <label htmlFor="car_location" className="block text-gray-700">
                    Address of car location
                  </label>
                  <input
                    required
                    type="text"
                    id="car_location"
                    name="car_location"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Enter the address of your car's current location"
                    value={carLocation}
                    onChange={(e) => setCarLocation(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <CarLocationMap />
              </div>
            }
            buttons={
              <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  onClick={_handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <span className="truncate">Next</span>
                  )}
                </button>
              </div>
            }
          />
        </form>
      </section>
    </div>
  );
}
