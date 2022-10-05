import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
import { IoLogoTwitter } from "react-icons/io5";

const testimonials = [
  {
    name: "André",
    messsage:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fugit aperiam rerum aut nisi enim natus, similique quas suscipit, possimus corrupti provident. Ab earum sunt vero beatae ut iusto laboriosam.",
  },
  {
    name: "Alexandra",
    messsage: "Lorem ipsum dolor ❤️.",
  },
  {
    name: "François",
    messsage:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fugit aperiam rerum aut nisi enim natus, similique quas suscipit, possimus corrupti provident. Ab earum sunt vero beatae ut iusto laboriosam.",
  },
  {
    name: "Nora D.",
    messsage:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fugit aperiam rerum aut nisi enim natus, similique quas suscipit, possimus corrupti provident. Ab earum sunt vero beatae ut iusto laboriosam.",
  },
  {
    name: "Laetitia A.",
    messsage:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fugit aperiam rerum aut nisi enim natus, similique quas suscipit, possimus corrupti provident. Ab earum sunt vero beatae ut iusto laboriosam.",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div>
        <div className="content-title flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-4xl pb-4">
            What our customers say...
          </h2>
          {/* <span className="text-lg">Complete a booking in 3 easy steps</span> */}
        </div>
        <div className="pt-6">
          <Swiper
            modules={[Navigation]}
            navigation={true}
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
            }}
            className=""
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide>
                <div id={index} className="px-4 w-full">
                  <div className="py-6 flex items-center space-x-6">
                    <div className="rounded-full aspect-square w-14 h-14 p-4 bg-[#1CA5F6] text-white flex items-center justify-center">
                      <IoLogoTwitter size={24} />
                    </div>
                    <h4 className="text-2xl">{testimonial.name}</h4>
                  </div>
                  <div className="text-gray-700 text-start">
                    <p>{testimonial.messsage}</p>
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

export default Testimonials;
