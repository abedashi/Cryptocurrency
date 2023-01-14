import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCoin } from "../utils/APIs";
import Spinner from "../components/UI/Spinner";

const Coin = () => {
  const params = useParams();

  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleCoin = async () => {
      try {
        const data = await getCoin(params.id);
        setCoin(data);
      } catch (error) {
        setError("API request Failed!");
      }
      setIsLoading(false);
    };
    getSingleCoin();
  }, [params.id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div
        className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
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
        <div className="flex flex-col border w-[70%] max-lg:w-full">
          <div className="flex items-center gap-2">
            <img src="" alt="" width="40" height="40" />
            <span>{coin.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>${coin.price}</div>
            <div>
              <ul className="flex items-center gap-2">
                <li>1D</li>
                <li>7D</li>
                <li>14D</li>
                <li>21D</li>
                <li>30D</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border w-[30%] max-lg:w-full">s</div>
      </div>
    </div>
  );
};

export default Coin;
