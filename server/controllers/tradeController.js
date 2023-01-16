const asyncHandler = require("express-async-handler");

// @desc    Sell Coins
// @route   POST /api/trade/sellCoins
// @acess   Private
const sellCoins = asyncHandler(async (req, res) => {
  const { } = req.body;
});

const buyCoins = asyncHandler(async (req, res) => { });

const getBuys = asyncHandler(async (req, res) => { });

module.exports = {
  sellCoins,
  buyCoins,
  getBuys,
};
