import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { getCarMakes } from "../services/DB";

export default function SearchCar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  //   const [makes, setMakes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let makes = [];
  let models = [];
  let types = [];

  const getMakes = async () => {
    try {
      makes = await getCarMakes();
      return makes;
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  const getModels = () => {};

  const getTypes = () => {};

  const handleSearch = () => {
    setIsLoading(true);
  };

  const carMakes = [
    { value: "", name: "--- Select manufacturer ---" },
    { value: "bmw", name: "BMW" },
    { value: "ford", name: "Ford" },
    { value: "honda", name: "Honda" },
    { value: "hyundai", name: "Hyundai" },
    { value: "mercedes_benz", name: "Mercedes Benz" },
    { value: "toyota", name: "Toyota" },
  ];

  const carTypes = [
    {
      name: "--- Select a car type ---",
      value: null,
    },
    {
      name: "Saloon",
      value: "saloon",
    },
    {
      name: "SUV",
      value: "suv",
    },
    {
      name: "Passenger",
      value: "passenger",
    },
    {
      name: "Cargo",
      value: "cargo",
    },
    {
      name: "Other/Utility",
      value: "other",
    },
  ];
  return (
    <div className="bg-gray-100 mt-16">
      <Navbar />
      <section className="bg-gray-100">
        <div className="relative w-full flex justify-between items-center gap-x-8 max-w-5xl mx-auto py-4 md:py-12">
          <select
            required
            type="text"
            placeholder="Make of car"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            disabled={isLoading}
            onClick={() => getMakes()}
            className="relative w-full"
          >
            {carMakes.map((type, index) => (
              <option id={index} value={type.value}>
                <span className="truncate">{type.name}</span>
              </option>
            ))}
          </select>
          <select
            required
            type="text"
            placeholder="Model of car"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={isLoading}
            onClick={() => getModels()}
            className="relative w-full"
          >
            {/* {carTypes.map((type, index) => (
              <option id={index} value={type.value}>
                <span className="truncate">{type.name}</span>
              </option>
            ))} */}
          </select>
          <select
            required
            type="text"
            placeholder="Type of car"
            value={type}
            onChange={(e) => setType(e.target.value)}
            disabled={isLoading}
            onClick={() => getTypes()}
            className="relative w-full"
          >
            {carTypes.map((type, index) => (
              <option id={index} value={type.value}>
                <span className="truncate">{type.name}</span>
              </option>
            ))}
          </select>
          <button
            className="btn-elevated btn-med ring-secondary-color bg-secondary-color shadow-secondary-color p-2 rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="flex justify-around items-center gap-x-4">
                <MdOutlineSearch className="text-xl text-white" />
                <span className="truncate">Search</span>
              </div>
            )}
          </button>
        </div>
        <main></main>
      </section>
    </div>
  );
}
