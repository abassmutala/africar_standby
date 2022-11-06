import {
  MdOutlineCalendarToday,
  MdLocationPin,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import RentingStep from "./../components/RentingStep";

const steps = [
  {
    icon: <MdLocationPin />,
    title: "Choose a location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <MdOutlineCalendarToday />,
    title: "Select dates",
    description:
      "Nam, dolores. Explicabo ipsa modi odit minima ipsum ut incidunt ea veritatis provident.",
  },
  {
    icon: <MdOutlineDirectionsCar />,
    title: "Select your preferred car",
    description:
      "Nam pariatur asperiores dolorum sapiente aliquid distinctio deserunt corporis?",
  },
];

const Features = () => {
  return (
    <section className="py-8 lg:py-12">
      <div>
        <div className="content-title flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-4xl pb-4">
            It takes 3 easy steps
          </h2>
          {/* <span className="text-lg">Complete a booking in 3 easy steps</span> */}
        </div>
        <div className="pt-6 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8">
          {steps.map((step, index) => (
            <div id={index} className="">
              <RentingStep step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
