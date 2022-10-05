import FormSection from "../../components/FormSection";

const makes = [
  { value: "", name: "--- Select manufacturer ---" },
  { value: "bmw", name: "BMW" },
  { value: "ford", name: "Ford" },
  { value: "Honda", name: "Honda" },
  { value: "hyundai", name: "Hyundai" },
  { value: "mercedes_benz", name: "Mercedes Benz" },
  { value: "toyota", name: "Toyota" },
];

const CarInfo = () => {
  return (
    <div>
      <section className="py-8 lg:lg:py-12">
        <div>
          <h2 className="sr-only">Steps</h2>
          <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
            <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
              <li className="relative text-left text-primary-color">
                <span className="absolute left-0 -bottom-[1.75rem] rounded-full bg-primary-color text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span className="block"> Host Info </span>
              </li>

              <li className="relative text-center text-primary-color">
                <span className="absolute left-1/2 -bottom-[1.75rem] -translate-x-1/2 rounded-full bg-primary-color text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span className="block"> Car Info </span>
              </li>

              <li className="relative text-right">
                <span className="absolute right-0 -bottom-[1.75rem] rounded-full bg-gray-300 text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span className="block"> Payment </span>
              </li>
            </ol>
          </div>
        </div>
        <form action="#" className="max-w-screen-lg mx-auto">
          <FormSection
            title="Car Info"
            description="Information here includes your personal biological data. Information provided here will be shown publicly"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <label for="car_make" className="block text-gray-700">
                    Car Make/Manufacturer
                  </label>
                  <select
                    type="text"
                    id="car_make"
                    name="car_make"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  >
                    {makes.map((make) => (
                      <option value={make.value}>{make.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="car_model" className="block text-gray-700">
                    Car Model
                  </label>
                  <input
                    type="text"
                    id="car_model"
                    name="car_model"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="year_of_manufacture"
                    className="block text-gray-700"
                  >
                    Year of manufacture
                  </label>
                  <input
                    type="date"
                    id="year_of_manufacture"
                    name="year_of_manufacture"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label for="description" className="block text-gray-700">
                    Car description
                  </label>
                  <textarea
                    rows={6}
                    type="date"
                    id="description"
                    name="description"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                    placeholder="Provide a breif description of your car."
                  />
                </div>
              </div>
            }
          />
          <FormSection
            title="Car Registration"
            description="Information here includes your personal biological data. Information provided here will be shown publicly"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <label for="plate_number" className="block text-gray-700">
                    Licence plate number
                  </label>
                  <input
                    type="text"
                    id="plate_number"
                    name="plate_number"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="licence_number" className="block text-gray-700">
                    Licence number
                  </label>
                  <input
                    type="text"
                    id="licence_number"
                    name="licence_number"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="vin" className="block text-gray-700">
                    Vehicle Identification Number (VIN)
                  </label>

                  <input
                    type="text"
                    id="vin"
                    name="vin"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  />
                </div>
              </div>
            }
          />
          <FormSection
            title="Car Photos"
            description="Provide clear, well-lit, high resolution photos of your car — successful hosts have at least 10 including:
            Exterior photos from all sides, Interior photos that show any unique features, Facility or fleet photos if you’re wish to share that you’re a business operating on Turo
            "
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6">
                  <label for="profile_photo" className="block text-gray-700">
                    Upload profile photo
                  </label>
                  <input
                    type="file"
                    id="profile_photo"
                    name="email"
                    className="w-full mt-1 text-gray-700 bg-white shadow-sm"
                  />
                </div>
              </div>
            }
            buttons={
              <div className="col-span-6 flex items-center justify-between mt-6 border-t-2 pt-6">
                <button type="submit" className="btn-med btn-outlined">
                  <span className="truncate">Back</span>
                </button>
                <button type="submit" className="btn-med btn-elevated">
                  <span className="truncate">Next</span>
                </button>
              </div>
            }
          />
        </form>
      </section>
    </div>
  );
};

export default CarInfo;
