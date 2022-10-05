import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import carwoman from "./../assets/carwoman.jpg";
import muslim_driver from "./../assets/muslim_driver.jpg";
import smiling from "./../assets/smiling.jpeg";
import happy_car_owner from "./../assets/happy_car_owner.jpeg";

import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

const sliderImages = [carwoman, happy_car_owner, muslim_driver, smiling];

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-[1440px]">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-4">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 AfricarTitle2 font-bold tracking-tight text-primary-color sm:leading-none">
                Search, rent and list vehicles easily
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              {/* <form className="flex flex-wrap items-center justify-center">
                <h2 className="AfricarTitle2">I need a&nbsp;</h2>
                <button className="AfricarTitle2 text-primary-color">
                  bus
                </button>
                <h2 className="AfricarTitle2">&nbsp;by&nbsp;</h2>
                <button className="AfricarTitle2 text-primary-color">
                  Toyota
                </button>
                <h2 className="AfricarTitle2">&nbsp;for&nbsp;</h2>
                <button className="AfricarTitle2 text-primary-color">7</button>
                <h2 className="AfricarTitle2">&nbsp;days.</h2>
              </form> */}
            </div>
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 md:gap-x-6">
              <button
                className="flex-1 btn-elevated btn-med w-full"
                onClick={() => navigate("/cars")}
              >
                <span>Rent a car</span>
              </button>
              <button
                className="flex-1 btn-outlined btn-med w-full"
                onClick={() => navigate("/become-a-host")}
              >
                <span>List a car</span>
              </button>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full lg:max-w-[1440px] -px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:absolute xl:px-0">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {sliderImages.map((image) => (
              <SwiperSlide>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderImages.map((image) => (
          <SwiperSlide>
            <div id={image} className="h-[560px] w-full relative z-0">
              <img
                src={image}
                alt="hero"
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute bottom-8 left-0 right-0">
                <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-12">
                  <div>
                    <h2 className="text-4xl">Your car on demand</h2>
                    <div className="flex flex-col lg:flex-col items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Header;
