import { useNavigate } from "react-router-dom";

const HostsHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white mt-16">
      <div className="relative flex flex-col-reverse pb-8 lg:py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-[1440px]">
          <div className="mb-8 lg:mb-16 lg:my-40 lg:max-w-3xl lg:pr-4">
            <div className="max-w-md xl:max-w-xl mb-6 text-left">
              <h1 className="mb-6 text-5xl lg:text-6xl tracking-tight sm:leading-none">
                Let your car work for you
              </h1>
              <p className="text-base text-gray-700 md:text-lg mt-6 lg:mt-12">
                Share your car whenever you're not using it and earn an average
                of £442 per month* on Africar, Africa's largest car sharing
                marketplace.
              </p>
            </div>
            <div className="mt-10 lg:mt-20">
              <button
                className="flex-1 btn-elevated btn-med bg-primary-color ring-primary-color"
                onClick={() => navigate("/register-host")}
              >
                <span>Get started</span>
              </button>
            </div>
          </div>
        </div>
        <div className="aspect-video lg:aspect-auto pb-8 lg:pb-0 inset-y-0 right-0 w-full lg:max-w-[1440px] -px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:absolute xl:px-0">
          <div className="h-full">
            {/* <img
              className="object-cover object-center lg:object-left w-full lg:shadow-none sm:h-96 lg:h-full"
              src={l200}
              alt="mitsubishi l200"
            /> */}
            <div className="bg-l200_side bg-center lg:bg-left bg-cover h-full rounded-lg" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 px-4 w-full">
          <small className="text-center w-full">
            * Based on the average monthly earning of at least 8 monthly
            bookings
          </small>
        </div>
      </div>
    </div>
  );
};

export default HostsHeader;
