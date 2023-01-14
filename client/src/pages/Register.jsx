import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/UI/Spinner";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = registerData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch]);

  const onChangeHandler = (event) => {
    setRegisterData((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(register(registerData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="h-max max-sm:w-full w-[550px] mt-12 p-10">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-3 tracking-tight dark:text-white">
              CRYPTO<span className="text-primary">X</span>
            </h1>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sign up a new account
            </h1>
            <span className="text-primary">
              Or{" "}
              <Link to="/login" className="hover:underline">
                Sign in
              </Link>
            </span>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className="bg-white rounded-lg p-5 shadow">
              <div className="flex items-center justify-between">
                <div className="mb-6 w-[45%]">
                  <label
                    htmlFor="fname"
                    className="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstName"
                    value={firstName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    autoComplete="off"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="mb-6 w-[45%]">
                  <label
                    htmlFor="lname"
                    className="block mb-2 w-max text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastName"
                    value={lastName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    autoComplete="off"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  autoComplete="off"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white w-full bg-primary hover:shadow-inner focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
