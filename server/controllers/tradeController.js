const asyncHandler = require("express-async-handler");
const Trade = require('../models/Trade');
const User = require('../models/User');

// @desc    Sell Coins
// @route   POST /api/trades/sell
// @acess   Private
const sellCoins = asyncHandler(async (req, res) => {
  const { coinId, amount, price } = req.body;
  const parsedAmount = parseInt(amount);
  if (!coinId || !parsedAmount || !price || parsedAmount <= 0) {
    res.status(400);
    throw new Error('Invalid Request!');
  }

  const totalPrice = parsedAmount * parseFloat(price);
  const coinExists = await Trade.findOne({ userId: req.user.id, coinId });
  if (parsedAmount > coinExists.amount) {
    res.status(400);
    throw new Error('You have less than this amount');
  }

  if (coinExists && coinExists.amount > 1) {
    if (coinExists.amount === parsedAmount) {
      const sell = await Trade.findOneAndDelete({ userId: req.user.id, coinId });
      res.status(200).json(sell);
    } else {
      coinExists.amount = coinExists.amount - parsedAmount;
      coinExists.price = coinExists.price - totalPrice;
      await coinExists.save();
      res.status(200).json(coinExists);
    }
  } else {
    const sell = await Trade.findOneAndDelete({ userId: req.user.id, coinId });
    res.status(200).json(sell);
  }
  req.user.balance = parseFloat(req.user.balance) + totalPrice;
  await req.user.save();
});

// @desc    Buy Coins
// @route   POST /api/trades/buy
// @acess   Private
const buyCoins = asyncHandler(async (req, res) => {
  const { coinId, amount, price } = req.body;
  const parsedAmount = parseInt(amount);
  if (!coinId || !parsedAmount || !price || parsedAmount <= 0) {
    res.status(400);
    throw new Error('Invalid Request!');
  }

  const totalPrice = parsedAmount * parseFloat(price);
  if (totalPrice > req.user.balance) {
    res.status(400);
    throw new Error('No enough balance');
  }

  const coinExists = await Trade.findOne({ userId: req.user.id, coinId });
  if (coinExists) {
    coinExists.amount = coinExists.amount + parsedAmount;
    coinExists.price = coinExists.price + totalPrice;
    await coinExists.save();
    res.status(200).json(coinExists);
  } else {
    const buy = await Trade.create({
      userId: req.user.id,
      coinId,
      amount: parsedAmount,
      price: totalPrice
    });
    res.status(201).json(buy);
  }
  req.user.balance = parseFloat(req.user.balance) - totalPrice;
  await req.user.save();
});

// @desc    Get All Coins
// @route   GET /api/trades
// @acess   Private
const getBuys = asyncHandler(async (req, res) => {
  const allBuys = await Trade.find({ userId: req.user.id });
  res.status(200).json(allBuys);
});

module.exports = {
  sellCoins,
  buyCoins,
  getBuys,
};
