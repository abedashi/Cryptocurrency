import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/UI/Spinner";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, navigate]);

  const onChangeHandler = (event) => {
    setLoginData((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(login(loginData));
    setLoginData((prevState) => {
      return { ...prevState, email: "", password: "" };
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center h-screen dark:bg-gray-800">
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
          <div className="bg-white rounded-lg p-5 shadow dark:bg-gray-900">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  htmlFor="emailLogin"
                  className="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="emailLogin"
                  name="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  // placeholder="john.doe@company.com"
                  autoComplete="off"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="passwordLogin"
                  className="block w-max mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="passwordLogin"
                  name="password"
                  value={password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  // placeholder="•••••••••"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                  type="submit"
                  className="text-white w-full bg-primary hover:shadow-inner focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
