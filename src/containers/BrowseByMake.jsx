import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
import Volvo from "./../assets/brand_logos/Volvo.png";
import Volkswagen from "./../assets/brand_logos/Volkswagen.png";
import Toyota from "./../assets/brand_logos/Toyota.png";
import Tesla from "./../assets/brand_logos/Tesla.png";
import Nissan from "./../assets/brand_logos/Nissan.png";
import Mitsubishi from "./../assets/brand_logos/Mitsubishi.png";
import Mercedes_Benz from "./../assets/brand_logos/Mercedes-Benz.png";
import Lexus from "./../assets/brand_logos/Lexus.png";
import Kia from "./../assets/brand_logos/Kia.png";
import Jaguar from "./../assets/brand_logos/Jaguar.png";
import Infiniti from "./../assets/brand_logos/Infiniti.png";
import Hyundai from "./../assets/brand_logos/Hyundai.png";
import Honda from "./../assets/brand_logos/Honda.png";
import GMC from "./../assets/brand_logos/GMC.png";
import Ford from "./../assets/brand_logos/Ford.png";
import Chevrolet from "./../assets/brand_logos/Chevrolet.png";
import BMW from "./../assets/brand_logos/BMW.png";
import Audi from "./../assets/brand_logos/Audi.png";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const carBrands = [
  {
    name: "Audi",
    logo: Audi,
  },
  {
    name: "BMW",
    logo: BMW,
  },
  {
    name: "Chevrolet",
    logo: Chevrolet,
  },
  {
    name: "Ford",
    logo: Ford,
  },
  {
    name: "GMC",
    logo: GMC,
  },
  {
    name: "Honda",
    logo: Honda,
  },
  {
    name: "Hyundai",
    logo: Hyundai,
  },
  {
    name: "Infiniti",
    logo: Infiniti,
  },
  {
    name: "Jaguar",
    logo: Jaguar,
  },
  {
    name: "Kia",
    logo: Kia,
  },
  {
    name: "Lexus",
    logo: Lexus,
  },
  {
    name: "Mercedes Benz",
    logo: Mercedes_Benz,
  },
  {
    name: "Mitsubishi",
    logo: Mitsubishi,
  },
  {
    name: "Nissan",
    logo: Nissan,
  },
  {
    name: "Tesla",
    logo: Tesla,
  },
  {
    name: "Toyota",
    logo: Toyota,
  },
  {
    name: "VW",
    logo: Volkswagen,
  },
  {
    name: "Volvo",
    logo: Volvo,
  },
];

const BrowseByMake = () => {
  return (
    <section className="py-8 lg:py-12">
      <div>
        <div className="flex flex-row items-center justify-between gap-x-4">
          <h2 className="text-center text-3xl md:text-4xl pb-4">
            Browse our fleet by make
          </h2>
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <MdOutlineChevronLeft size={24} />
            </button>
            <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
              <MdOutlineChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="pt-6">
          <Swiper
            modules={[Navigation]}
            navigation={false}
            loop={true}
            slidesPerView={2}
            slidesPerGroup={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              1440: {
                slidesPerView: 7,
                slidesPerGroup: 7,
              },
            }}
            className=""
          >
            {carBrands.map((brand) => (
              <SwiperSlide className="aspect-square max-h-[180px]">
                <div className="ring-1 ring-slate-200 rounded-lg hover:ring-primary-color w-full mx-4 aspect-square cursor-pointer">
                  <div className="p-4 flex flex-col justify-center items-center">
                    <div className="text-gray-700 w-20 h-20">
                      <img
                        src={brand.logo}
                        alt={brand.logo}
                        width="24px"
                        height="24px"
                      />
                    </div>
                    <div className="pt-6">
                      <h4 className="text-xl truncate">{brand.name}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pt-6">
          <button class="relative inline-flex items-center justify-center px-12 py-3 overflow-hidden text-primary-color transition duration-300 ease-out border-none ring-1 ring-primary-color rounded-lg shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary-color group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-primary-color transition-all duration-300 transform group-hover:translate-x-full ease">
              View all
            </span>
            <span class="relative invisible">View all</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseByMake;
