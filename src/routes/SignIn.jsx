import "./../forms.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner";
import {
  emailInvalidText,
  emailRequiredText,
  passwordInvalidText,
  passwordRequiredText,
  validEmail,
  validPassword,
} from "../utils";
import { useAuth } from "../contexts/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (_event) => {
    _event.preventDefault();
    if (!email) {
      setError(emailRequiredText);
    } else if (!validEmail.test(email)) {
      setError(emailInvalidText);
    } else if (!password) {
      setError(passwordRequiredText);
    } else if (!validPassword.test(password)) {
      setError(passwordInvalidText);
    }

    try {
      setError("");
      setIsLoading(true);
      await login(email, password);
      navigate("/")
    } catch (error) {
      alert(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <div className="relative flex items-end h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19"
              alt="Pattern"
              className="absolute inset-0 object-cover w-full h-full opacity-80"
            />

            <div className="hidden lg:block lg:relative lg:p-12">
              <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Africar
              </h1>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </div>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl">
              <div className="relative block mt-16 lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Africar
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
              <form
                onSubmit={handleSignIn}
                // method="POST"
                className="grid grid-cols-6 gap-6 mt-8"
              >
                {error && (
                  <div className="col-span-full border border-amber-500 rounded-lg px-2 py-3">
                    <span className="text-amber-500 text-center AfricarTitle5">
                      {error}
                    </span>
                  </div>
                )}
                <div className="col-span-6">
                  <label htmlFor="Email" className="block">
                    Email address
                  </label>
                  <input
                    required
                    autoFocus={true}
                    type="email"
                    id="Email"
                    name="email"
                    className="w-full mt-1 bg-white rounded-md shadow-sm"
                    placeholder="Enter your email address"
                    pattern={validEmail.source}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Password" className="block">
                    Password
                  </label>

                  <input
                    required={true}
                    type="password"
                    id="Password"
                    name="password"
                    className="w-full mt-1 bg-white rounded-md shadow-sm"
                    placeholder="Enter your password"
                    pattern={validPassword.source}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>

                <div className="col-span-6">
                  <Link to="/" disabled={isLoading}>
                    <p className="mt-1 font-bold text-center">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <div className="col-span-6">
                  <p className="text-center">
                    By creating an account, you agree to our&nbsp;
                    <Link
                      to="terms"
                      className="text-gray-700 underline"
                      disabled={isLoading}
                    >
                      Terms of Service
                    </Link>
                    &nbsp;and&nbsp;
                    <Link
                      to="privacy"
                      className="text-gray-700 underline"
                      disabled={isLoading}
                    >
                      Privacy policy
                    </Link>
                  </p>
                </div>

                <div className="col-span-6">
                  <div className="flex justify-center w-full">
                    <button
                      class="btn-elevated btn-med w-full max-w-md"
                      // onClick={handleSignIn}
                      disabled={isLoading}
                    >
                      {isLoading ? <LoadingSpinner /> : <span>Sign in</span>}
                    </button>
                  </div>

                  <p className="text-center mt-4">
                    Dont't have an account?&nbsp;
                    <Link
                      to="/sign-up"
                      replace={true}
                      className="text-gray-700 underline"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
