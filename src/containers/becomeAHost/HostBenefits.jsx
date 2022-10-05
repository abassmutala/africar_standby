import {
  MdOutlineShield,
  MdOutlineSupportAgent,
  MdOutlineSwapHoriz,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const hostBenefits = [
  {
    icon: <MdOutlineShield />,
    title: "Safe and trusted community",
    description:
      "Africar screens all guests before allowing them to book, so you can rest easy knowing your car is in good hands.",
  },
  {
    icon: <MdOutlineSupportAgent />,
    title: "24/7 Customer support",
    description:
      "24/7 customer support is just a click away, and your guests have easy access to Turo roadside assistance.",
  },
  {
    icon: <MdOutlineSwapHoriz />,
    title: "Two-way reviews",
    description:
      "Both hosts and guests review each other after every trip, so you can see your guests’ reviews before hosting them.",
  },
];

const HostBenefits = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 lg:lg:py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="content-title flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-4xl pb-4">
            Why work with us.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          {hostBenefits.map((benefit, index) => (
            <div id={index} className="py-6 px-4 w-full">
              <div className="pb-4">
                <div className="flex flex-row items-center gap-x-8">
                  <div className="rounded-full aspect-square w-16 h-16 p-2 bg-footer-bg text-gray-800 text-4xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-2xl">{benefit.title}</h4>
                </div>
              </div>
              <div className="text-gray-700 text-start">
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8">
          <button
            class="btn-med btn-elevated"
            onClick={() => navigate("/become-a-host/list")}
          >
            <span className="truncate">List your car</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HostBenefits;
