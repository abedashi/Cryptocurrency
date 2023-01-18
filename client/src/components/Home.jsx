import { useState, useEffect } from "react";
import CoinsTable from "./CoinsTable";
import { getCoins } from "../utils/APIs";
import Pagination from "./UI/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBuys } from "../features/trade/tradeSlice";
import MyCoinList from "../components/UI/MyCoinList";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { buys, isLoading: tradeIsLoading } = useSelector(
    (state) => state.trade
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getBuys());
  }, [user, navigate, dispatch]);

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
          {!tradeIsLoading && (
            <div className="rounded-lg h-64 max-md:w-full w-8/12 bg-white">
              <div className="h-full overflow-y-scroll relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        MyCoin
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        total price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {buys.length === 0 && (
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="pl-6 py-4">Not Coins Available</td>
                      </tr>
                    )}
                    {buys.length > 0 &&
                      buys.map((coin) => (
                        <tr
                          key={coin.coinId}
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 cursor-pointer"
                        >
                          <td
                            className="px-6 py-4 flex items-center gap-2"
                            onClick={() => {
                              navigate(`/${coin.coinId}`);
                            }}
                          >
                            <img
                              src={coin.image}
                              alt={coin.name}
                              width="40"
                              height="40"
                            />
                            <div>
                              <span className="text-black">{coin.name}</span>{" "}
                              {coin.symbol}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            ${coin.price / coin.amount}
                          </td>
                          <td className="px-6 py-4">${coin.price}</td>
                          <td className="px-6 py-4">{coin.amount}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {tradeIsLoading && <MyCoinList />}
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
