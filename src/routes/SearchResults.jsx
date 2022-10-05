import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MdArrowDropDown,
  MdClose,
  MdFilter,
  MdRemove,
  MdAdd,
  MdGridView,
  MdViewList,
} from "react-icons/md";
// import {mdiCarShiftPattern, mdiCarSeat, mdiSeat} from '@mdi/font'
import { useNavigate } from "react-router-dom";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: true },
  { name: "Newest", href: "#", current: true },
  { name: "Price: Low to High", href: "#", current: true },
  { name: "Price: High to Low", href: "#", current: true },
];
// const subCategories = [
//   { name: "Car type", href: "/" },
//   { name: "Make", href: "/" },
//   { name: "Colour", href: "/" },
// ];
const filters = [
  {
    id: "carType",
    name: "Car Type",
    options: [
      { value: "Saloon", label: "Saloon", checked: true },
      { value: "suv", label: "SUV", checked: true },
      { value: "bus", label: "Bus", checked: true },
      { value: "cargo", label: "Cargo", checked: true },
      { value: "others", label: "Others", checked: true },
    ],
  },
  {
    id: "make",
    name: "Make",
    options: [
      { value: "honda", label: "Honda", checked: true },
      { value: "kia", label: "Kia", checked: true },
      { value: "toyota", label: "Toyota", checked: true },
      { value: "hyundai", label: "Hyundai", checked: true },
      { value: "mitsubishi", label: "Mitsubishi", checked: true },
      { value: "vw", label: "VW", checked: true },
    ],
  },
  {
    id: "transmission",
    name: "Transmission",
    options: [
      { value: "automatic", label: "Automatic", checked: true },
      { value: "manual", label: "Manual", checked: true },
    ],
  },
  {
    id: "fuelType",
    name: "Fuel Type",
    options: [
      { value: "petrol", label: "Petrol", checked: true },
      { value: "diesel", label: "Diesel", checked: true },
      { value: "electric", label: "Electric", checked: true },
    ],
  },
  {
    id: "engineCapacity",
    name: "Engine Capacity",
    options: [
      { value: "2l", label: "2L", checked: true },
      { value: "4l", label: "4L", checked: true },
      { value: "6l", label: "6L", checked: true },
    ],
  },
  {
    id: "seatCapacity",
    name: "Sitting Capacity",
    options: [
      { value: "2", label: "2 Seats", checked: true },
      { value: "5", label: "5 Seats", checked: true },
      { value: "7", label: "7 Seats", checked: true },
      { value: "7+", label: "7+ Seats", checked: true },
    ],
  },
  // {
  //   id: "colour",
  //   name: "Colour",
  //   options: [
  //     { value: "white", label: "White", checked: true },
  //     { value: "black", label: "Black", checked: true },
  //     { value: "blue", label: "Blue", checked: true },
  //     { value: "brown", label: "Brown", checked: true },
  //     { value: "green", label: "Green", checked: true },
  //     { value: "purple", label: "Purple", checked: true },
  //   ],
  // },
];

const cars = [
  {
    make: "Infiniti",
    model: "Q50",
    year: 2021,
    pricePerDay: 100,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2021-INFINITI-Q50.jpeg",
  },
  {
    make: "Audi",
    model: "RS 6 Avant",
    year: 2022,
    pricePerDay: 100,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Audi-RS_6_Avant.jpeg",
  },
  {
    make: "Hyundai",
    model: "Sonata",
    year: 2022,
    pricePerDay: 80,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Hyundai-Sonata.jpeg",
  },
  {
    make: "Chevrolet",
    model: "Bolt EV",
    year: 2023,
    pricePerDay: 250,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    href: "/",
    photo: "../cars/2023-Chevrolet-Bolt_EV.jpeg",
  },
  {
    make: "Aston Martin",
    model: "DB11",
    year: 2022,
    pricePerDay: 300,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Aston_Martin-DB11.jpeg",
  },
  {
    make: "Hyundai",
    model: "Ioniq 5",
    year: 2022,
    pricePerDay: 300,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    href: "/",
    photo: "../cars/2022-Hyundai-IONIQ_5.jpeg",
  },
  {
    make: "Jaguar",
    model: "I-Pace",
    year: 2022,
    pricePerDay: 350,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    href: "/",
    photo: "../cars/2022-Jaguar-I-PACE.jpeg",
  },
  {
    make: "VW",
    model: "Jetta",
    year: 2022,
    pricePerDay: 250,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Volkswagen-Jetta.jpeg",
  },
  {
    make: "Land Rover",
    model: "Range Rover Velar",
    year: 2021,
    pricePerDay: 300,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2021-Land_Rover-Range_Rover_Velar.jpeg",
  },
  {
    make: "BMW",
    model: "X4 M",
    year: 2022,
    pricePerDay: 300,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-BMW-X4_M.jpeg",
  },
  {
    make: "BMW",
    model: "X4",
    year: 2022,
    pricePerDay: 280,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-BMW-X4.jpeg",
  },
  {
    make: "Lamborghini",
    model: "Urus",
    year: 2021,
    pricePerDay: 500,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2021-Lamborghini-Urus.jpeg",
  },
  {
    make: "Bentley",
    model: "Bentayga",
    year: 2022,
    pricePerDay: 500,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Bentley-Bentayga.jpeg",
  },
  {
    make: "Buick",
    model: "Envision",
    year: 2022,
    pricePerDay: 450,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Buick-Envision.jpeg",
  },
  {
    make: "Hyundai",
    model: "Santa Cruz",
    year: 2023,
    pricePerDay: 250,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2023-Hyundai-Santa_Cruz.jpeg",
  },
  {
    make: "Mercedes Benz",
    model: "Sprinter Crew",
    year: 2021,
    pricePerDay: 400,
    seats: 12,
    transmission: "Manual",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2021-Mercedes-Benz-Sprinter_Crew_Van.jpeg",
  },
  {
    make: "GMC",
    model: "Sierra 1500",
    year: 2022,
    pricePerDay: 450,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-GMC-Sierra_1500.jpeg",
  },
  {
    make: "Chevrolet",
    model: "Express Passenger",
    year: 2022,
    pricePerDay: 350,
    seats: 15,
    transmission: "Manual",
    fuel: "Petrol",
    href: "/",
    photo: "../cars/2022-Chevrolet-Express_Passenger.jpeg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SearchResults = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const navigate = useNavigate();
  return (
    //   <div>
    //     <div className="bg-white">
    //       <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-12"></div>
    //     </div>
    //     <div className="">
    //       <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-12">
    //           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    //               <div className="col-span-1 border-1 border-button-hover rounded-lg h-full p-4">
    //                   <div className="border-b border-button-hover">
    //                   <h4 className="AfricarTitle4">Filter by</h4></div>
    //                   .CarTypeFilter
    //               </div>
    //               <div className="col-span-3"></div>
    //           </div>
    //       </div>
    //     </div>
    //   </div>

    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Close menu</span>
                      <MdClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {/* <ul
                      // role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MdRemove
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MdAdd
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="AfricarTitle4 tracking-tight text-gray-900">
              Filter by
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <MdArrowDropDown
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                onClick={() => setIsGrid(!isGrid)}
              >
                {isGrid ? (
                  <>
                    <span className="sr-only">View list</span>
                    <MdViewList className="h-5 w-5" aria-hidden="true" />{" "}
                  </>
                ) : (
                  <>
                    <span className="sr-only">View grid</span>
                    <MdGridView className="h-5 w-5" aria-hidden="true" />{" "}
                  </>
                )}
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <MdFilter className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {/* <ul
                  // role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MdRemove
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MdAdd className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-md text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              <div className="col-span-3">
                {isGrid ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cars.map((car, index) => (
                      <div
                        id={index}
                        className="ring-1 ring-slate-200 rounded-lg w-full max-h-[320px] truncate hover:ring-primary-color cursor-pointer"
                        onClick={() =>
                          navigate(`/car/${car.make}/${car.model}/${index + 1}`)
                        }
                      >
                        <div className="flex flex-col">
                          <div className="h-full aspect-video object-center overflow-hidden">
                            <img
                              src={car.photo}
                              alt={car.model}
                              // width={350}
                              // height={160}
                              className="w-full overflow-hidden bg-slate-100 rounded-t-lg"
                            />
                          </div>
                          <div className="p-4">
                            <h6 className="AfricarTitle5 truncate">
                              {car.make} {car.model} {car.year}
                            </h6>
                            <div>
                              <ul className="pt-2 flex justify-center space-x-2 text-md lg:text-lg text-gray-500 truncate">
                                <li className="truncate">{car.seats} Seats</li>
                                <li>&middot;</li>
                                <li className="truncate">{car.transmission}</li>
                                <li>&middot;</li>
                                <li className="truncate">{car.fuel}</li>
                              </ul>
                            </div>
                            <div className="flex flex-row justify-between pt-2">
                              <div className="flex items-center space-x-1">
                                <dd>4.5</dd>
                                <dt className="text-sky-500">
                                  <span className="sr-only">Star rating</span>
                                  <svg
                                    width="16"
                                    height="20"
                                    fill="currentColor"
                                  >
                                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                  </svg>
                                </dt>
                              </div>
                              <h6 className="AfricarTitle5 truncate">
                                ${car.pricePerDay}
                                <sub className=" text-gray-500">/day</sub>
                              </h6>
                            </div>
                          </div>
                        </div>

                        {/* <div className="relative grid grid-cols-3">
                      <div className="w-full col-span-1">
                        <img
                          src={car.photo}
                          alt={car.model}
                          width={350}
                          height="180"
                          className="flex-none bg-slate-100 rounded-l-lg"
                        />
                      </div>
                      <div className="col-span-2 p-4 flex flex-col items-start truncate">
                        <h6 className="text-2xl mb-4 truncate">
                          {car.make} {car.model} {car.year}
                        </h6>
                        <div>
                          <dt className="sr-only">Production Year</dt>
                          <dd className="px-1.5 ring-1 ring-slate-200 rounded text-lg truncate">
                            {car.fuel}
                          </dd>
                        </div>
                        <div>
                          <ul className="my-4 flex justify-center space-x-2 text-lg text-gray-500 truncate">
                            <li>{car.seats} Seats</li>
                            <li>&middot;</li>
                            <li>{car.transmission}</li>
                            <li>&middot;</li>
                            <li>{car.fuel}</li>
                          </ul>
                        </div>
                        // <div className="flex items-center justify-between space-x-6 w-full">
                        //   <div className="flex items-center space-x-1">
                        //     <dd>4.5</dd>
                        //     <dt className="text-sky-500">
                        //       <span className="sr-only">Star rating</span>
                        //       <svg width="16" height="20" fill="currentColor">
                        //         <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                        //       </svg>
                        //     </dt>
                        //   </div>
                        //   <h6 className="text-2xl truncate">
                        //     ${car.pricePerDay}
                        //     <sub className=" text-gray-500">/day</sub>
                        //   </h6>
                        // </div>
                      </div>
                    </div> */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col space-y-6 lg:space-y--8">
                    {cars.map((car, index) => (
                      <div
                        id={index}
                        className="ring-1 ring-slate-200 rounded-lg w-full min-h-[192px] max-h-[256px] truncate hover:ring-primary-color cursor-pointer"
                        onClick={() =>
                          navigate(`/car/${car.make}/${car.model}/${index + 1}`)
                        }
                      >
                        <div className="flex flex-row h-full">
                          <div className="h-full max-w-[256px] lg:max-w-xs object-center overflow-hidden">
                            <img
                              src={car.photo}
                              alt={car.model}
                              className="w-full overflow-hidden bg-slate-100 rounded-l-lg"
                            />
                          </div>
                          <div className="p-4 flex flex-col flex-grow min-h-[192px]">
                            <h6 className="AfricarTitle5 truncate">
                              {car.make} {car.model} {car.year}
                            </h6>
                            <div>
                              <ul className="pt-2 flex justify-start space-x-2 text-md lg:text-lg text-gray-500 truncate">
                                <li className="truncate">{car.seats} Seats</li>
                                <li>&middot;</li>
                                <li className="truncate">{car.transmission}</li>
                                <li>&middot;</li>
                                <li className="truncate">{car.fuel}</li>
                              </ul>
                            </div>
                            <div className="flex flex-row flex-grow justify-between place-items-end pt-2">
                              <div className="flex items-center space-x-1">
                                <dd>4.5</dd>
                                <dt className="text-sky-500">
                                  <span className="sr-only">Star rating</span>
                                  <svg
                                    width="16"
                                    height="20"
                                    fill="currentColor"
                                  >
                                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                  </svg>
                                </dt>
                              </div>
                              <h6 className="AfricarTitle5 truncate">
                                ${car.pricePerDay}
                                <sub className=" text-gray-500">/day</sub>
                              </h6>
                            </div>
                          </div>
                        </div>

                        {/* <div className="relative grid grid-cols-3">
                      <div className="w-full col-span-1">
                        <img
                          src={car.photo}
                          alt={car.model}
                          width={350}
                          height="180"
                          className="flex-none bg-slate-100 rounded-l-lg"
                        />
                      </div>
                      <div className="col-span-2 p-4 flex flex-col items-start truncate">
                        <h6 className="text-2xl mb-4 truncate">
                          {car.make} {car.model} {car.year}
                        </h6>
                        <div>
                          <dt className="sr-only">Production Year</dt>
                          <dd className="px-1.5 ring-1 ring-slate-200 rounded text-lg truncate">
                            {car.fuel}
                          </dd>
                        </div>
                        <div>
                          <ul className="my-4 flex justify-center space-x-2 text-lg text-gray-500 truncate">
                            <li>{car.seats} Seats</li>
                            <li>&middot;</li>
                            <li>{car.transmission}</li>
                            <li>&middot;</li>
                            <li>{car.fuel}</li>
                          </ul>
                        </div>
                        // <div className="flex items-center justify-between space-x-6 w-full">
                        //   <div className="flex items-center space-x-1">
                        //     <dd>4.5</dd>
                        //     <dt className="text-sky-500">
                        //       <span className="sr-only">Star rating</span>
                        //       <svg width="16" height="20" fill="currentColor">
                        //         <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                        //       </svg>
                        //     </dt>
                        //   </div>
                        //   <h6 className="text-2xl truncate">
                        //     ${car.pricePerDay}
                        //     <sub className=" text-gray-500">/day</sub>
                        //   </h6>
                        // </div>
                      </div>
                    </div> */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchResults;
