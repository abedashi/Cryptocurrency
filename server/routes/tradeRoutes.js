const express = require('express');
const router = express.Router();

const { sellCoins, buyCoins, getBuys } = require('../controllers/tradeController');
const { protect } = require('../middleware/authMiddleware');

router.post('/sell/:id', protect, sellCoins);
router.post('/buy', protect, buyCoins);
router.get('/', protect, getBuys);

module.exports = router;