import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="h-max max-sm:w-full w-[550px] mt-12 p-10">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-3 tracking-tight dark:text-white">
              CRYPTO<span className="text-primary">X</span>
            </h1>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </h1>
            <span className="text-primary">
              Or{" "}
              <Link to="/register" className="hover:underline">
                Sign up
              </Link>
            </span>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <div class="mb-6">
              <label
                for="email"
                class="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                autoComplete="off"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="font-medium text-primary">
                Forgot your password?
              </div>
            </div>
            <div>
              <button
                type="button"
                class="text-white w-full bg-primary hover:shadow-inner focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
