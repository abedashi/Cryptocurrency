import axios from "axios";

const API_URL = "/api/trades/";

const sellCoins = async (sellData, token) => {
  const { data } = await axios.post(API_URL + "sell", sellData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const buyCoins = async (buyData, token) => {
  const { data } = await axios.post(API_URL + "buy", buyData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const getBuys = async (token) => {
  const { data } = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const tradeService = {
  sellCoins,
  buyCoins,
  getBuys,
};

export default tradeService;
