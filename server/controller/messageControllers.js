const { Message, Chat } = require('../models');

// @description     Create New Message
// @route           POST /api/Message/
// @access          Protected
const sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Invalid data passed into request'
    });
  }

  try {
    // Create a new message
    let message = await Message.create({
      sender: req.user._id, // Logged in user id,
      content,
      chat: chatId
    });

    message = await (
      await message.populate('sender', 'name pic')
    ).populate({
      path: 'Chat',
      select: 'chatName isGroupChat users',
      model: 'Chat',
      populate: { path: 'users', select: 'name email pic', model: 'users' }
    });

    // const dex = await Message.find({ chat: chatId })
    //   .populate('sender', 'name pic email')
    //   .populate('chat');

    console.log({ message });
    // Update latest message
    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    return res.status(201).json(message); // Send message we just created now
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Failed to create New Message'
    });
  }
};

// @description     Get all Messages
// @route           GET /api/Message/:chatId
// @access          Protected
const allMessages = async (req, res) => {
  // await Message.remove({});
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate('sender', 'name pic email')
      .populate('chat');

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Failed to fetch all Messages'
    });
  }
};

module.exports = { sendMessage, allMessages };
