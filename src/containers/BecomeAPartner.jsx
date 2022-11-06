import car_owner from "./../assets/car_owner.jpg";

const BecomeAPartner = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                class="absolute inset-0 object-cover w-full h-full"
                // src="https://www.hyperui.dev/photos/house-1.jpeg"
                src={car_owner}
                alt="Indoors house"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-300">
            <span class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-300 lg:block lg:-left-16"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 class="sm:text-3xl">Become a partner</h2>

              <p class="mt-4 text-gray-600">
                Join thouands of car owners building businesses and earning
                meaningful income on Africar
              </p>

              <button
                class="inline-block px-12 py-3 mt-8 font-medium text-white bg-primary-color border border-primary-color rounded active:text-primary-color hover:bg-transparent hover:text-primary-color focus:outline-none focus:ring"
                href="/contact"
              >
                <span className="whitespace-nowrap">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeAPartner;
