import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCoin } from "../utils/APIs";
import Spinner from "../components/UI/Spinner";
import CoinChart from "./CoinChart";
import Trade from "./Trade";

const Coin = () => {
  const params = useParams();

  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [days, setDays] = useState(7);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const data = await getCoin(params.id);
        setCoin(data);
      } catch (error) {
        setError("API request Failed!");
      }
      setIsLoading(false);
    };
    getCoinData();
  }, [params.id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div
        className="flex p-4 max-xl:mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
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
            <li>Don't panic it's normal to failed at some points</li>
            <li>CoinGecko responsible for that error.</li>
            <li>It need some minutes to be resolved</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="max-xl:mt-4 rounded-lg shadow bg-white">
      <div className="flex gap-2 max-lg:flex-wrap p-6 px-4">
        <div className="flex flex-col w-[70%] rounded-lg max-lg:w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 p-2">
              <img src={coin.image} alt={coin.name} width="40" height="40" />
              <span>{coin.name}</span>
              <span className="text-gray-400">{coin.symbol}</span>
            </div>
            <div className="p-2">
              <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Rank #{coin.rank}
              </kbd>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 pb-0 pt-2">
            <div className="text-2xl font-semibold">${coin.price}</div>
            <div>
              <ul className="flex items-center gap-3 font-semibold">
                <li
                  className={`cursor-pointer ${
                    days === 1 ? "text-[#A6EC9A]" : "text-black"
                  }`}
                  onClick={() => setDays(1)}
                >
                  1D
                </li>
                <li
                  className={`cursor-pointer ${
                    days === 7 ? "text-[#A6EC9A]" : "text-black"
                  }`}
                  onClick={() => setDays(7)}
                >
                  7D
                </li>
                <li
                  className={`cursor-pointer ${
                    days === 14 ? "text-[#A6EC9A]" : "text-black"
                  }`}
                  onClick={() => setDays(14)}
                >
                  14D
                </li>
                <li
                  className={`cursor-pointer ${
                    days === 21 ? "text-[#A6EC9A]" : "text-black"
                  }`}
                  onClick={() => setDays(21)}
                >
                  21D
                </li>
                <li
                  className={`cursor-pointer ${
                    days === 30 ? "text-[#A6EC9A]" : "text-black"
                  }`}
                  onClick={() => setDays(30)}
                >
                  30D
                </li>
              </ul>
            </div>
          </div>
          <div>
            <CoinChart id={coin.id} days={days} />
          </div>
          <div></div>
        </div>
        <Trade coin={coin} />
      </div>
    </div>
  );
};

export default Coin;
