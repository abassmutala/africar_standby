import { useNavigate } from "react-router-dom";
import FormSection from "../../components/FormSection";

const HostInfo = () => {
  const navigate = useNavigate();
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

              <li className="relative text-center">
                <span className="absolute left-1/2 -bottom-[1.75rem] -translate-x-1/2 rounded-full bg-gray-300 text-white">
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
            title="Profile"
            description="Information here includes your personal data. Information provided here will be shown publicly"
            inputs={
              <div className="grid grid-cols-6 gap-6 mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    for="profile_photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload profile photo
                  </label>
                  <input
                    type="file"
                    id="profile_photo"
                    name="email"
                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>

                {/* <div className="col-span-6">
            <label for="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="w-5 h-5 bg-white border-gray-200 rounded-md shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div> */}
              </div>
            }
            buttons={
              <div className="col-span-6 flex items-center justify-end mt-6 border-t-2 pt-6">
                <button
                  type="submit"
                  className="btn-med btn-elevated"
                  onClick={() => {
                    navigate("#");
                  }}
                >
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

export default HostInfo;
