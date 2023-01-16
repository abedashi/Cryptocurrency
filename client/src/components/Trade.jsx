import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCoins, getBuys, reset } from "../features/trade/tradeSlice";

const Trade = ({ coin }) => {
  const dispatch = useDispatch();
  const { buy, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.trade
  );

  // useEffect(() => {
  //   // if (isError) {
  //   //   console.log(message);
  //   // }

  //   dispatch(getBuys());

  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [message, dispatch]);

  const [trade, setTrade] = useState({
    buy: true,
    sell: false,
  });

  const onBuyBtnHandler = () => {
    setTrade((state) => {
      return {
        buy: true,
        sell: false,
      };
    });
  };
  const onSellBtnHandler = () => {
    setTrade((state) => {
      return {
        buy: false,
        sell: true,
      };
    });
  };

  const [amount, setAmount] = useState({
    buyAmount: "",
    sellAmount: "",
  });

  const onChangeHandler = (event) => {
    setAmount((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (trade.buy) {
      console.log(amount.buyAmount);
    }
    if (trade.sell) {
      console.log(amount.sellAmount);
      // {
      // id: coin.id;
      // amount: 3;
      // }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-between border shadow w-[30%] max-lg:w-full rounded-lg"
    >
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
                onChange={onBuyBtnHandler}
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
                onChange={onSellBtnHandler}
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

        <div className="flex items-center justify-between p-3 text-sm font-medium text-gray-900 dark:text-white">
          <span>Total Balance</span>
          <span>$20000</span>
        </div>
        <div className="flex items-center justify-between px-3 pb-3 text-sm font-medium text-gray-900 dark:text-white">
          <span>{coin.name} Owned</span>
          <span>0</span>
        </div>
        {trade.buy && (
          <div className="px-3 pb-3">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount to buy"
              autoComplete="off"
              name="buyAmount"
              onChange={onChangeHandler}
              required
            />
          </div>
        )}
        {trade.sell && (
          <div className="px-3 pb-3">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount to sell"
              autoComplete="off"
              name="sellAmount"
              onChange={onChangeHandler}
              required
            />
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
    </form>
  );
};

export default Trade;
