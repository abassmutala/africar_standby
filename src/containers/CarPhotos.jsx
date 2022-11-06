import front from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_fq_oem_1_1600x1067.jpeg";
import back from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_rq_oem_2_1600x1067.jpeg";
import dash from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_g_oem_1_1600x1067.jpeg";
import interior from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_i_oem_1_1600x1067.jpeg";
import gear from "./../assets/crv/2020_honda_cr-v_4dr-suv_touring_shf_oem_1_1600x1067.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

const CarPhotos = (props) => {
  return (
    <div className="bg-white">
      <section className="stay_images w-full h-[240px] md:h-[360px] lg:hidden">
        <Swiper
          className="photos_slider h-full"
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
        >
          {/* <div id=""> */}
          <SwiperSlide>
            <img
              className="object-cover object-center w-full h-full"
              src={front}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover object-center w-full h-full"
              src={"/cars/2023-Hyundai-Santa_Cruz.jpeg"}
              alt={props.photo}
            />
          </SwiperSlide>
          {/* </div> */}
        </Swiper>
      </section>
      <section class="py-12 hidden lg:block overflow-hidden bg-white text-gray-700">
          <div className="grid grid-cols-2 gap-x-6 h-[480px]">
            <div className="relative overflow-hidden bg-no-repeat bg-cover w-full cursor-pointer rounded-l-lg">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out"
                src={front}
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full cursor-pointer">
              <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-0">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out"
                  src={back}
                />
              </div>
              <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-tr-lg">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out"
                  src={gear}
                />
              </div>
              <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-0">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out"
                  src={interior}
                />
              </div>
              <div className="relative overflow-hidden bg-no-repeat bg-cover w-full rounded-br-lg">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full hover:opacity-90 transition duration-300 ease-in-out"
                  src={dash}
                />
                <span class="AfricarTitle4 absolute flex items-center justify-center bg-black text-white backdrop-blur-xl bg-opacity-60 bottom-0 right-0 w-full h-full gap-2 p-4 rounded-0 cursor-pointer hover:text-primary-color">
                  View all 14 photos
                </span>
              </div>
            </div>
          </div>
      </section>

      {/* <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-8">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            loop={false}
            slidesPerView={1}
            slidesPerGroup={1}
            className="col-span-3"
          >
            <SwiperSlide className="h-[720px]">
              <div className="p-4 flex flex-col justify-center items-center">
                <div className="text-gray-700 w-full h-full">
                  <img
                    src={"/cars/2021-Lamborghini-Urus.jpeg"}
                    alt={props.photo}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="col-span-2 flex flex-col">
            <div className="w-full border border-gray-400 rounded-lg p-4">
              <div className="flex flex-row items-center justify-between pb-6">
                <div className="flex flex-row items-end">
                  <h2 className="AfricarTitle2">$200</h2>
                  <span className="text-gray-500">/day</span>
                </div>
                <div className="text-gray-500">
                  <a href="#reviews">
                    <p className="underline">40 Reviews</p>
                  </a>
                </div>
              </div>
              <button className="btn-outlined btn-med w-full p-0 mb-6">
                <div className="flex flex-row divide-x divide-primary-color">
                  <div className="p-4 w-full">
                    <label
                      htmlFor="pickup"
                      className="text-sm font-semibold truncate"
                    >
                      Pick-up Date
                      <p className="text-black">10th Feb. 2022</p>
                    </label>
                  </div>
                  <div className="p-4 w-full">
                    <label
                      htmlFor="pickup"
                      className="text-sm font-semibold truncate"
                    >
                      Drop-off Date
                      <p className="text-black">10th Feb. 2022</p>
                    </label>
                  </div>
                </div>
              </button>
              <div className="py-6 flex flex-row gap-x-4 items-center">
                <div className="w-20 h-20 p-4 rounded-full bg-primary-color">
                  <div className="flex items-center justify-center text-white">
                    <h1 className="AfricarTitle1 uppercase">G</h1>
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="AfricarTitle4 truncate">Gib Anison</h3>
                  <p className="truncate text-gray-500">Joined August 2022</p>
                  <div className="flex flex-row text-xl items-center">
                    <p className="truncate text-gray-500">2 Cars</p>
                    <p>&nbsp;&bull;&nbsp;</p>
                    <p className="flex items-center truncate text-gray-500">
                      4.5 <MdStarRate size={20} />
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn-elevated btn-med w-full mb-6"
              >
                <div className="flex flex-row items-center justify-center gap-x-4">
                  <MdCall size={24} className="text-lg" />
                  <span className="truncate"> Call</span>
                </div>
              </button>
              <button type="submit" className="btn-outlined btn-med w-full">
                <div className="flex flex-row items-center justify-center gap-x-4">
                  <MdChatBubbleOutline size={24} className="text-lg" />
                  <span className="truncate"> Chat now</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarPhotos;
