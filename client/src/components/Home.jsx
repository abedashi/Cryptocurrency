import { useState, useEffect } from "react";
import CoinsTable from "./CoinsTable";
import { getCoins } from "../utils/APIs";
import Pagination from "./UI/Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  const [markets, setMarkets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstPost = indexOfLastCoin - coinsPerPage;
  const currentCoins = markets.slice(indexOfFirstPost, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getCoinsData = async () => {
      try {
        const data = await getCoins();
        setMarkets(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getCoinsData();
  }, []);

  const fLetter = user.fname.charAt(0).toUpperCase();
  const fname = fLetter + user.fname.slice(1);
  // console.log(fname);

  return (
    <>
      <div className="flex items-center justify-between flex-wrap max-xl:mt-2">
        <div>Welcome Back, {user ? fname : ""}!</div>
        <div className="flex items-center justify-between max-sm:w-full gap-3 max-sm:mt-2">
          <div>
            <input
              type="search"
              id="first_name"
              className="search"
              placeholder="Search"
              autoComplete="off"
              required
            />
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-primary peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Light Mode
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex gap-8 max-md:flex-wrap">
          <div className="rounded-lg h-64 max-md:w-full w-8/12">
            <div className="h-full overflow-y-scroll relative overflow-x-auto shadow-md rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #1 Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Sliver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #2 Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #3 Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #4 Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #5 Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex max-md:flex-row flex-col max-md:h-40 h-64 gap-8 max-md:w-full w-4/12">
            <div className="flex items-center justify-between flex-wrap bg-primary text-white rounded-lg max-md:h-40 h-28 max-md:w-full shadow-md p-5">
              <h1 className="text-xl font-bold">Balance</h1>
              <h1 className="text-2xl">
                ${user ? parseFloat(user.balance).toFixed(2) : ""}
              </h1>
            </div>
            <div className="flex items-center justify-between flex-wrap bg-primary text-white rounded-lg max-md:h-40 h-28 max-md:w-full shadow-md p-5">
              <h1 className="text-xl font-bold">Balance</h1>
              <h1 className="text-2xl">$10000</h1>
            </div>
          </div>
        </div>
      </div>

      <CoinsTable markets={currentCoins} isLoading={isLoading} error={error} />
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={markets.length}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
