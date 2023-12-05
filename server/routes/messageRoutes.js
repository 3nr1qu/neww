const express = require('express');
const {
  sendMessage,
  allMessages
} = require('../controller/messageControllers');

const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/').post(protect, sendMessage);
router.route('/:chatId').get(protect, allMessages); // Fetch all messages for a single chat

module.exports = router;
