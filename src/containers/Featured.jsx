import { Tab } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const featuredCars = {
  Saloon: [
    {
      make: "Infiniti",
      model: "Q50",
      year: 2021,
      pricePerDay: 100,
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      href: "/",
      photo: "cars/2021-INFINITI-Q50.jpeg",
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
      photo: "cars/2022-Audi-RS_6_Avant.jpeg",
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
      photo: "cars/2022-Hyundai-Sonata.jpeg",
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
      photo: "cars/2023-Chevrolet-Bolt_EV.jpeg",
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
      photo: "cars/2022-Aston_Martin-DB11.jpeg",
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
      photo: "cars/2022-Hyundai-IONIQ_5.jpeg",
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
      photo: "cars/2022-Jaguar-I-PACE.jpeg",
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
      photo: "cars/2022-Volkswagen-Jetta.jpeg",
    },
  ],
  SUV: [
    {
      make: "Land Rover",
      model: "Range Rover Velar",
      year: 2021,
      pricePerDay: 300,
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      href: "/",
      photo: "cars/2021-Land_Rover-Range_Rover_Velar.jpeg",
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
      photo: "cars/2022-BMW-X4_M.jpeg",
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
      photo: "cars/2022-BMW-X4.jpeg",
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
      photo: "cars/2021-Lamborghini-Urus.jpeg",
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
      photo: "cars/2022-Bentley-Bentayga.jpeg",
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
      photo: "cars/2022-Buick-Envision.jpeg",
    },
  ],
  Others: [
    {
      make: "Hyundai",
      model: "Santa Cruz",
      year: 2023,
      pricePerDay: 250,
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      href: "/",
      photo: "cars/2023-Hyundai-Santa_Cruz.jpeg",
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
      photo: "cars/2021-Mercedes-Benz-Sprinter_Crew_Van.jpeg",
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
      photo: "cars/2022-GMC-Sierra_1500.jpeg",
    },
  ],
  Passenger: [
    {
      make: "Chevrolet",
      model: "Express Passenger",
      year: 2022,
      pricePerDay: 350,
      seats: 15,
      transmission: "Manual",
      fuel: "Petrol",
      href: "/",
      photo: "cars/2022-Chevrolet-Express_Passenger.jpeg",
    },
  ],
};

const Featured = () => {
  const navigate = useNavigate();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="py-8 lg:py-12">
      <div>
        <div className="flex flex-row items-center justify-between gap-x-4">
          <h2 className="text-center AfricarTitle2 pb-4">Featured cars</h2>
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <button class="p-2 text-gray-800 transition-colors duration-300 border border-gray-500 rounded-full hover:bg-gray-100">
              <MdOutlineChevronLeft size={24} />
            </button>
            <button class="p-2 text-gray-800 transition-colors duration-300 border border-gray-500 rounded-full lg:mx-6 hover:bg-gray-100">
              <MdOutlineChevronRight size={24} />
            </button>
          </div>
        </div>
        {/* <div className="content-title flex flex-col items-center">
          <h2 className="text-center AfricarTitle2 pb-4">Featured cars</h2>
          <span className="text-xl text-gray-600">
            Premium, guaranteed and fully equipped
          </span>
        </div> */}
        <div className="pt-12">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-footer-bg p-1">
              {Object.keys(featuredCars).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 font-medium leading-5 text-primary-color",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-color focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-primary-color hover:bg-white/[0.12]"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="my-6">
              {Object.values(featuredCars).map((cars, idx) => (
                <Tab.Panel
                  key={idx}
                  //   className={classNames(
                  //     "rounded-xl bg-white",
                  //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-color focus:outline-none focus:ring-2"
                  //   )}
                >
                  <div className="h-[400px]">
                    <Swiper
                      modules={[Navigation]}
                      navigation={false}
                      loop={true}
                      slidesPerView={1}
                      slidesPerGroup={1}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        768: {
                          slidesPerView: 2,
                          slidesPerGroup: 1,
                        },
                        1024: {
                          slidesPerView: 4,
                          slidesPerGroup: 1,
                        },
                      }}
                      className=""
                    >
                      {cars.map((car, index) => (
                        <SwiperSlide className="w-full">
                          <div
                            id={index}
                            className="ring-1 ring-slate-200 rounded-lg mx-6 w-full max-w-sm truncate hover:ring-primary-color cursor-pointer"
                            onClick={() =>
                              navigate(
                                `/car/${car.make}/${car.model}/${index + 1}`
                              )
                            }
                          >
                            <div className="relative">
                              {/* <div className="absolute top-0 right-0 flex items-center space-x-1">
                            <dt className="text-sky-500">
                              <span className="sr-only">Star rating</span>
                              <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                              </svg>
                            </dt>
                            <dd>4.5</dd>
                          </div> */}
                              <div className="w-full">
                                <img
                                  src={car.photo}
                                  alt={car.model}
                                  width={350}
                                  height="180"
                                  className="flex-none bg-slate-100 rounded-t-lg"
                                />
                              </div>
                              <div className="m-4 flex flex-col items-center truncate">
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
                                <div className="flex items-center justify-between space-x-6 w-full">
                                  <div className="flex items-center space-x-1">
                                    <dd>4.5</dd>
                                    <dt className="text-sky-500">
                                      <span className="sr-only">
                                        Star rating
                                      </span>
                                      <svg
                                        width="16"
                                        height="20"
                                        fill="currentColor"
                                      >
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                      </svg>
                                    </dt>
                                  </div>
                                  <h6 className="text-2xl truncate">
                                    ${car.pricePerDay}
                                    <sub className=" text-gray-500">/day</sub>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        //     <article className="flex items-start space-x-6 p-6">
                        //     <div className="min-w-0 relative flex-auto">
                        //       <h2 className="font-semibold text-slate-900 truncate pr-20">{car.make}</h2>
                        //       <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                        //         <div>
                        //           <dt className="sr-only">Genre</dt>
                        //           <dd className="flex items-center">
                        //             <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                        //               <circle cx="1" cy="1" r="1" />
                        //             </svg>
                        //             {car.transmission}
                        //           </dd>
                        //         </div>
                        //         <div>
                        //           <dt className="sr-only">Runtime</dt>
                        //           <dd className="flex items-center">
                        //             <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                        //               <circle cx="1" cy="1" r="1" />
                        //             </svg>
                        //             {car.pricePerDay}
                        //           </dd>
                        //         </div>
                        //         <div className="flex-none w-full mt-2 font-normal">
                        //           <dt className="sr-only">Cast</dt>
                        //           <dd className="text-slate-400">Electric</dd>
                        //         </div>
                        //       </dl>
                        //     </div>
                        //   </article>

                        //   <li
                        //     key=''//{car.id}
                        //     className="relative rounded-md p-3 hover:bg-gray-100"
                        //   >
                        //     <h3 className="text-sm font-medium leading-5">
                        //       {car.make}
                        //     </h3>

                        //     <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        //       <li>{car.model}</li>
                        //       <li>&middot;</li>
                        //       <li>{car.pricePerDay} comments</li>
                        //       <li>&middot;</li>
                        //       <li>{car.transmission} shares</li>
                        //     </ul>

                        //     <a
                        //       href="#"
                        //       className={classNames(
                        //         "absolute inset-0 rounded-md",
                        //         "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        //       )}
                        //     />
                        //   </li>
                      ))}
                    </Swiper>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Featured;
