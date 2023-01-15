import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogouHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <nav className="max-xl:block hidden bg-gray-50 border border-gray-200 px-2 sm:px-4 py-2.5 rounded-lg dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            CRYPTO<span className="text-primary">X</span>
          </span>
        </a>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-primary dark:focus:ring-primary"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            {/* <span className="sr-only">Open user menu</span> */}
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user"
            />
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {user ? `${user.fname} ${user.lname}` : ""}
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                {user ? user.email : ""}
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link to="/home">
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </span>
                </Link>
              </li>
              <li onClick={onLogouHandler}>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sign out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
