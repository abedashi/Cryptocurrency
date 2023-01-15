import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCoins } from "../utils/APIs";
import Skeleton from "./UI/Skeleton";
import Spinner from "./UI/Spinner";

const CoinsTable = () => {
  const navigate = useNavigate();
  const [markets, setMarkets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return (
      <div
        className="flex my-8 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Danger</span>
        <div>
          <span class="font-medium">Request went wrong!</span>
          <ul className="mt-1.5 ml-4 list-disc list-inside">
            <li>Don't panic it's normal to failed at some points.</li>
            <li>CoinGecko responsible for that error.</li>
            <li>Our Free API* has a rate limit of 10-50 calls/minuted.</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg mt-8">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
            <th scope="col" className="px-6 py-3">
              24h
            </th>
            <th scope="col" className="px-6 py-3">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {markets.map((coin) => (
            <tr
              onClick={() => {
                navigate(`/${coin.id}`);
              }}
              key={coin.id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 cursor-pointer"
            >
              <td className="px-6 py-4">{coin.rank}</td>
              <td className="px-6 py-4 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} width="40" height="40" />
                <div>
                  <span className="text-black">{coin.name}</span> {coin.symbol}
                </div>
              </td>
              <td className="px-6 py-4">${coin.price}</td>
              <td className="px-6 py-4">${coin.volume}</td>
              <td
                className={`px-6 py-4 ${
                  coin.perDay > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                ${coin.perDay}
              </td>
              <td className="px-6 py-4">${coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
