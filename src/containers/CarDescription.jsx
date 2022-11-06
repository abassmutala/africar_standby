import {
  MdOutlineAirlineSeatReclineNormal,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdOutlineDoorBack,
  MdOutlineLocalGasStation,
  MdOutlinePerson,
  MdOutlineSettings,
} from "react-icons/md";
import { Marker, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { MdLocationPin } from "react-icons/md";
import mapStyle from "../assets/GoogleMapStyle.json";
import CarFeature from "./../components/CarFeature";
import front from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_fq_oem_1_1600x1067.jpeg";
import back from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_rq_oem_2_1600x1067.jpeg";
import dash from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_g_oem_1_1600x1067.jpeg";
import interior from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_i_oem_1_1600x1067.jpeg";
import gear from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_shf_oem_1_1600x1067.jpeg";
import steer from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_g_oem_1_1600x1067.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";

const carPhotos = [front, back, dash, interior, gear, steer];

const features = [
  {
    name: "Exterior colour",
    value: "Grey",
  },
  {
    name: "Interior colour",
    value: "Black",
  },
  {
    name: "Transmission",
    value: "Automatic",
  },
  {
    name: "Engine capacity",
    value: "1.6L",
  },
  {
    name: "Seats",
    value: "5 Seats",
  },
  // {
  //   name: "Doors",
  //   value: "4 Doors",
  // },
  {
    name: "Fuel type",
    value: "Petrol",
  },
  {
    name: "Air conditioning",
    value: "Yes",
  },
  {
    name: "GPS",
    value: "Yes",
  },
];

const CarDescription = () => {
  const PriceAndDates = (
    <div className="col-span-full lg:col-span-4">
      <div className="bg-white">
        <div className="bg-primary-color px-6 py-4 text-white">
          <div className="flex flex-row items-start">
            <h2 className="AfricarTitle4 lg:AfricarTitle2">$200</h2>
            <p className="">/day</p>
          </div>
        </div>
        <div className="pt-6 lg:p-6">
          <div className="grid grid-cols-2 gap-x-6">
            <div className="">
              <label htmlFor="PickUpDate" className="block">
                Pick-up date
              </label>
              <input
                type="date"
                name="pick_up_date"
                id="PickUpDate"
                className="w-full mt-1 bg-white rounded-md shadow-sm"
              />
            </div>
            <div className="">
              <label htmlFor="DropOffDate" className="block">
                Drop-off Date
              </label>
              <input
                type="date"
                id="DropOffDate"
                name="drop-_off_date"
                class="w-full mt-1 bg-white rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="w-full mt-20">
            <h3 className="AfricarTitle3 text-secondary-color">
              Total: $200.00
            </h3>
          </div>
          <div className="mt-12 w-full">
            <button
              type="submit"
              className="btn-med btn-elevated w-full bg-primary-color ring-primary-color"
            >
              <span className="truncate uppercase">Rent now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // const containerStyle = {
  //   width: "100%",
  //   // height: "360px",
  //   aspectRatio: 1 / 1,
  // };

  // const center = {
  //   lat: 5.6066048,
  //   lng: -0.2064384,
  // };

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // });

  // if (!isLoaded) {
  //   return (
  //     <div className="py-8 lg:py-12 bg-footer-bg aspect-square">
  //       <div className="flex items-center justify-center h-full w-full">
  //         <h4 className="AfricarTitle4">Loading map...</h4>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white lg:bg-gray-200 mt-16">
      <section className="bg-white lg:bg-gray-200 lg:px-0 py-8 lg:py-12">
        <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-x-0 gap-y-8 lg:gap-6">
          <div className="col-span-8 border-t-2 border-gray-200 bg-white p-0 lg:p-12">
            <div className="">
              <div className="mb-0 md:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-8">
                  <div className="col-span-full">
                    <Swiper
                      modules={[Navigation]}
                      navigation={false}
                      loop={true}
                      className=""
                    >
                      {carPhotos.map((photo, index) => (
                        <SwiperSlide id={index}>
                          <div className="w-full h-64 md:h-80 lg:h-[480px] content-center content-cover overflow-hidden cursor-pointer">
                            <img
                              src={photo}
                              alt="photo"
                              className="overflow-hidden w-full"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="col-span-full">
                    <div className="flex justify-start items-center gap-x-2 mb-2">
                      <h3 className="AfricarTitle3 truncate">2020</h3>
                      <h3 className="AfricarTitle3 truncate">Honda CR-V</h3>
                    </div>
                    <div className="mt-4 md:mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 grid-rows-1 gap-6 lg:gap-4 w-full">
                      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-sm aspect-square cursor-pointer">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out rounded-sm"
                          src={front}
                        />
                      </div>
                      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-sm aspect-square cursor-pointer">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out rounded-sm"
                          src={back}
                        />
                      </div>
                      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-sm aspect-square cursor-pointer">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out rounded-sm"
                          src={gear}
                        />
                      </div>
                      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-sm aspect-square cursor-pointer">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out rounded-sm"
                          src={interior}
                        />
                      </div>
                      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-sm aspect-square cursor-pointer">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out rounded-sm"
                          src={steer}
                        />
                      </div>
                      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-sm aspect-square cursor-pointer">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out rounded-sm"
                          src={dash}
                        />
                        <span class="AfricarTitle5 absolute inset-0 flex items-center justify-center text-center  bg-black text-white backdrop-blur-xl bg-opacity-60 w-full h-full gap-2 p-4 rounded-0 cursor-pointer hover:text-primary-color">
                          +8 photos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300">
                <h4 className="AfricarTitle4 truncate mt-6 lg:mt-8">
                  Overview
                </h4>
                <div className="py-6 lg:py-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-6">
                  {features.map((feature, index) => (
                    <div id={index} className="">
                      <label htmlFor={feature.name} className="block">
                        {feature.name}
                      </label>
                      <span className="text-secondary-color font-bold text-lg">
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-300">
                <h4 className="AfricarTitle4 truncate mt-6 lg:mt-8">
                  Description
                </h4>
                <div className="pt-4 lg:pt-6">
                  <p className="pb-3 md:pb-4 lg:pb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa tempore consequatur beatae reiciendis atque dolorem
                    ducimus eum ad eaque eveniet molestias aliquid odio quam
                    modi saepe reprehenderit, autem corporis neque!. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="pb-3 md:pb-4 lg:pb-6">
                    Quia esse doloremque, expedita, enim illum sapiente eligendi
                    vero natus deserunt, sequi soluta modi deleniti. Voluptates
                    reiciendis, labore cumque aliquid sequi voluptatem. Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Autem ab
                    quo maiores, unde ratione laudantium itaque sunt iusto minus
                    asperiores voluptatum, soluta eligendi quidem rerum amet
                    esse. Consectetur, maxime? Suscipit. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300">
                <h4 className="AfricarTitle4 truncate mt-6 lg:mt-8">
                  Car rules
                </h4>
                <div className="py-4 lg:py-6">
                  <ul className="text-amber-500">
                    <li>
                      <p>No smoking</p>
                    </li>
                    <li>
                      <p>Not for commercial use</p>
                    </li>
                    <li>
                      <p>Do not rep</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-300">
                <h4 className="AfricarTitle4 truncate mt-6 lg:mt-8">
                  Available locations
                </h4>
                <div className="py-4 lg:py-6">
                  <p>
                    This car is available for rent in the following locations:
                  </p>
                  <ul className="text-green-600">
                    <li>
                      <p>Greater Accra Region</p>
                    </li>
                    <li>
                      <p>Central Region</p>
                    </li>
                    <li>
                      <p>Volta Region</p>
                    </li>
                    <li>
                      <p>Eastern Region</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {PriceAndDates}
        </div>
      </section>
      {/* <section>
        <div className="pb-6 flex flex-row justify-between items-center gap-x-4 border-b border-gray-300">
          <h3 className="AfricarTitle4 lg:AfricarTitle2 flex-grow truncate">
            Honda CR-V 2021
          </h3>
          <div className="flex flex-row items-end">
            <h2 className="AfricarTitle4 lg:AfricarTitle2">$200</h2>
            <span className="text-gray-500">/day</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          {features.map((feature, index) => (
            <CarFeature feature={feature} index={index} />
          ))}
        </div>
      </section>
      <section>
        <div className="pb-6 grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-8 border-b border-gray-300">
          <div className="col-span-1 lg:col-span-3">
            <h4 className="AfricarTitle4 truncate">Description</h4>
            <div className="py-6">
              <p className="p-0 lg:pb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                tempore consequatur beatae reiciendis atque dolorem ducimus eum
                ad eaque eveniet molestias aliquid odio quam modi saepe
                reprehenderit, autem corporis neque!. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia esse doloremque, expedita,
                enim illum sapiente eligendi vero natus deserunt, sequi soluta
                modi deleniti. Voluptates reiciendis, labore cumque aliquid
                sequi voluptatem. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Autem ab quo maiores, unde ratione laudantium
                itaque sunt iusto minus asperiores voluptatum, soluta eligendi
                quidem rerum amet esse. Consectetur, maxime? Suscipit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <h4 className="AfricarTitle4 truncate">Features</h4>
            <div className="pt-6">{/* Features */}
      {/* </div>
          </div>
          <div
            id="location"
            className="col-span-2 flex flex-col lg:mt-14 -mx-4 sm:mx-0 w-full bg-white"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              options={{ disableDefaultUI: true, styles: mapStyle }}
            >
              <>
                <Marker position={center} />
              </>
            </GoogleMap>
            <div className="py-6">
              <div className="pb-4">
                <p className="truncate text-gray-500">Car location</p>
              </div>
              <div className="flex flex-row items-center gap-x-4 truncate">
                <MdLocationPin size={24} />
                <p className="AfricarTitle5">
                  Kotaka International Airport, Greater Accra Region
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col -mx-4 sm:mx-0">
            <CarLocationMap />
          </div>
      </section> */}
    </div>
  );
};

export default CarDescription;
