import { useState } from "react";

const Trade = ({ coin }) => {
  const [trade, setTrade] = useState({
    buy: true,
    sell: false,
  });
  const onBuyHandler = () => {
    setTrade((state) => {
      return {
        buy: true,
        sell: false,
      };
    });
  };
  const onSellHandler = () => {
    setTrade((state) => {
      return {
        buy: false,
        sell: true,
      };
    });
  };

  return (
    <div className="flex flex-col justify-between border shadow w-[30%] max-lg:w-full rounded-lg">
      <div>
        <div className="font-bold text-xl border-b text-center p-2 pt-5">
          Make a trade
        </div>
        <div>
          <ul className="grid w-full gap-2 grid-cols-2 p-2">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                className="hidden peer"
                onChange={onBuyHandler}
                defaultChecked="true"
                required
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">Buy</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value={trade.sell}
                className="hidden peer"
                onChange={onSellHandler}
              />
              <label
                htmlFor="hosting-big"
                className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">Sell</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        {trade.buy && (
          <>
            <div className="flex items-center justify-between p-3 text-sm font-medium text-gray-900 dark:text-white">
              <span>Total Balance</span>
              <span>$20000</span>
            </div>
            <div className="flex items-center justify-between px-3 pb-3 text-sm font-medium text-gray-900 dark:text-white">
              <span>{coin.name} Owned</span>
              <span>0</span>
            </div>
            <div className="px-3 pb-3">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amount"
                autoComplete="off"
                required
              />
            </div>
          </>
        )}
        {trade.sell && (
          <div className="p-3">
            <label
              htmlFor="countries"
              className="block mb-2 w-max text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="default">Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        )}
      </div>
      <div className="p-3">
        <button
          type="submit"
          className="text-white w-full bg-primary hover:shadow-inner focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {trade.buy ? "Buy" : "Sell"}
        </button>
      </div>
    </div>
  );
};

export default Trade;
