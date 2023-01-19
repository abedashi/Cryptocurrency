import { useNavigate } from "react-router-dom";
import Error from "./UI/Error";
import Skeleton from "./UI/Skeleton";

const CoinsTable = ({ markets, isLoading, error }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return <Error />;
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
                  <span className="text-black dark:text-gray-200">
                    {coin.name}
                  </span>{" "}
                  {coin.symbol}
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
