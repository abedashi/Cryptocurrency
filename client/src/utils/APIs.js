import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoins = async () => {
  const { data } = await axios.get(
    BASE_URL +
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  try {
    let loadedData = [];
    for (const coin of data) {
      loadedData.push({
        id: coin.id,
        name: coin.name,
        rank: coin.market_cap_rank,
        image: coin.image,
        symbol: coin.symbol,
        price: coin.current_price,
        volume: coin.total_volume,
        perDay: coin.price_change_24h,
        market_cap: coin.market_cap,
      });
    }

    return loadedData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getCoin = async (id) => {
  const { data } = await axios.get(
    BASE_URL +
    `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  try {
    let loadedData = {
      id: data.id,
      name: data.name,
      rank: data.market_cap_rank,
      symbol: data.symbol,
      image: data.image.small,
      price: data.market_data.current_price.usd,
    };

    return loadedData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const getCoinChart = async (id, days) => {
  const { data } = await axios.get(BASE_URL + `/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);

  try {
    let loadedData = {
      prices: data.prices
    }
    return loadedData;
  } catch (error) {
    console.log(error);
    return error;
  }
};