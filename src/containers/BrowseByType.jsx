import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./styles.css";
import { Autoplay } from "swiper";

const types = [
  {
    name: "Compact",
    photo: "cars/2022-Volkswagen-Jetta.jpeg",
  },
  {
    name: "SUV",
    photo: "cars/2021-Lamborghini-Urus.jpeg",
  },
  {
    name: "Pickup truck",
    photo: "cars/2022-GMC-Sierra_1500.jpeg",
  },
  {
    name: "Sports car",
    photo: "cars/2022-Aston_Martin-DB11.jpeg",
  },
  {
    name: "Luxury car",
    photo: "cars/2020-Bentley-Continental.jpeg",
  },
  {
    name: "Vintage car",
    photo: "cars/2021-Lamborghini-Urus.jpeg",
  },
  {
    name: "Utility vehicle",
    photo: "cars/2021-Mercedes-Benz-Sprinter_Crew_Van.jpeg",
  },
  {
    name: "Passenger vehicle",
    photo: "cars/2022-Chevrolet-Express_Passenger.jpeg",
  },
  {
    name: "Cargo vehicle",
    photo: "cars/2022-Ford-Transit_Cargo_Van.jpeg",
  },
];

const BrowseByType = () => {
  return (
    <section className="py-8 lg:py-12">
      <div>
        <div className="content-title flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-4xl pb-4">
            Browse our fleet by type
          </h2>
          {/* <span className="text-lg">Complete a booking in 3 easy steps</span> */}
        </div>
        <div className="pt-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // navigation={true}
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
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
            className=""
          >
            {types.map((type) => (
              <SwiperSlide className="my-4">
                <div className="w-full mx-4 cursor-pointer">
                  <div className="p-4 flex flex-col justify-center items-center">
                    <div className="w-full">
                      <img
                        src={type.photo}
                        alt={type.photo}
                        // width="24px"
                        // height="24px"
                      />
                    </div>
                    <div className="pt-4 hover:text-primary-color">
                      <h4 className="text-xl font-bold truncate">
                        {type.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BrowseByType;
