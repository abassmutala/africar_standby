import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white mt-16">
      <div className="relative flex flex-col-reverse pb-8 lg:py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-center lg:items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-[1440px]">
          <div className="mb-8 lg:my-16 lg:max-w-3xl lg:pr-4">
            <div className="max-w-md xl:max-w-xl mb-6 text-left">
              <h1 className="mb-6 text-5xl lg:text-6xl tracking-tight sm:leading-none">
                Looking to save on car rentals?
              </h1>
              <p className="text-base text-gray-700 md:text-lg mt-6 lg:mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia culpa, nam corporis animi facere expedita cumque et
                maxime obcaecati iure numquam rem eveniet explicabo, labore,
                officiis ratione sunt necessitatibus ex.
              </p>
            </div>
            <div className="mt-10 lg:mt-20 flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 md:gap-x-6 max-w-full md:max-w-min">
              <button
                className="flex-1 btn-elevated btn-med bg-secondary-color ring-secondary-color w-full"
                onClick={() => navigate("cars")}
              >
                <span>Rent a car</span>
              </button>
              <button
                className="flex-1 btn-elevated btn-med w-full"
                onClick={() => navigate("host")}
              >
                <span>List a car</span>
              </button>
            </div>
          </div>
        </div>
        <div className="aspect-video lg:aspect-auto pb-8 lg:pb-0 inset-y-0 right-0 w-full lg:max-w-[1440px] -px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:absolute xl:px-0 pt-4 lg:pt-0">
          <div className="h-full bg-white">
            <div className="bg-santa_fe_front bg-center lg:bg-left bg-cover h-full rounded-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
