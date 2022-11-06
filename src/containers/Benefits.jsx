import React from "react";
import {
  MdMonetizationOn,
  MdOutlineCreditScore,
  MdOutlineShield,
} from "react-icons/md";
import Benefit from "./../components/Benefit";

const benefits = [
  {
    icon: <MdOutlineCreditScore />,
    title: "Deals for every budget",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <MdMonetizationOn />,
    title: "Best price guaranteed",
    description: "Porro molestiae veniam placeat, mollitia eaque quia?",
  },
  {
    icon: <MdOutlineShield />,
    title: "Safe and secure platform",
    description:
      "Error libero similique omnis natus, harum officia totam voluptate quam minus alias minima sequi rem?",
  },
];

const Benefits = () => {
  return (
    <div className="bg-white py-8 lg:py-12">
      <div className="relative flex flex-col-reverse lg:py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="aspect-video lg:aspect-auto inset-y-0 left-0 w-full lg:max-w-[1440px] mx-auto lg:w-1/2 xl:w-[60%] lg:absolute xl:px-0">
          <div className="h-full">
            <div className="bg-camry_back bg-center lg:bg-right bg-cover h-full" />
          </div>
        </div>

        <div className="flex flex-col items-end w-full max-w-2xl px-4 md:px-6 mx-auto lg:px-8 lg:max-w-[1440px]">
          <div className="max-w-xl text-left">
            <h1 className="w-full mb-6 AfricarTitle2 font-bold tracking-tight sm:leading-none">
              Feel the best experience with our rental deals.
            </h1>
            <div>
              {benefits.map((benefit) => (
                <div className="my-12">
                  <Benefit benefit={benefit} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
