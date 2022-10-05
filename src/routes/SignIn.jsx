import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex items-end h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19"
              alt="Pattern"
              class="absolute inset-0 object-cover w-full h-full opacity-80"
            />

            <div class="hidden lg:block lg:relative lg:p-12">
              <h1 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Africar
              </h1>

              <p class="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl">
              <div class="relative block mt-16 lg:hidden">
                <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Africar
                </h1>

                <p class="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              <form action="#" class="grid grid-cols-6 gap-6 mt-8">
                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <Link to="/">
                    <p class="mt-1 text-sm font-bold text-gray-700 text-center">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <div class="col-span-6">
                  <p class="text-sm text-gray-500 text-center">
                    By creating an account, you agree to our&nbsp;
                    <Link to="terms" class="text-gray-700 underline">
                      Terms of Service
                    </Link>
                    &nbsp;and&nbsp;
                    <Link to="privacy" class="text-gray-700 underline">
                      Privacy policy
                    </Link>
                  </p>
                </div>

                <div class="col-span-6 text-center sm:flex sm:items-center sm:gap-4">
                  <button class="btn-med btn-elevated">
                    <span>Sign in</span>
                  </button>

                  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Dont't have an account?&nbsp;
                    <Link to="/sign-up" class="text-gray-700 underline">
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
