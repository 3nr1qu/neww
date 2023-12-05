const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Import Router
const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/categories');
const productRouter = require('./routes/products');
const brainTreeRouter = require('./routes/braintree');
const orderRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const customizeRouter = require('./routes/customize');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const appointmentRouter = require('./routes/appointment');
const socketIO = require('socket.io');

// Import Auth middleware for check user login or not~
const { loginCheck } = require('./middleware/auth');
const CreateAllFolder = require('./config/uploadFolderCreateScript');

const Chat = require('./models/Chat');

var STATIC_CHANNELS = [
  {
    name: 'Global chat',
    participants: 0,
    id: 1,
    sockets: []
  },
  {
    name: 'Funny',
    participants: 0,
    id: 2,
    sockets: []
  }
];

/* Create All Uploads Folder if not exists | For Uploading Images */
CreateAllFolder();

// Database Connection

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() =>
    console.log(
      '==============Mongodb Database Connected Successfully=============='
    )
  )
  .catch(err => console.log('Database Not Connected !!!'));

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['POST', 'GET'],
    credentials: true
  })
);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', authRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/user', usersRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api', brainTreeRouter);
app.use('/api/order', orderRouter);
app.use('/api/customize', customizeRouter);

app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);

app.get('/', (req, res) => {
  res.json('object');
});

// Run Server
const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log('Server is running on -  ', PORT);
});

const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000'
  },
  pingTimeout: 60 * 1000
});

io.on('connect_failed', function () {
  console.log('Connection Failed');
});

io.on('connection', socket => {
  console.log('Connected to socket.io');
  console.log('Dex');
  socket.on('setup', userData => {
    console.log({ setup: userData.user._id });
    socket.join(userData.user._id);
    socket.emit('connected');
  });

  socket.on('join chat', room => {
    socket.join(room);
    console.log('User joined room ' + room);
  });

  socket.on('typing', room => socket.in(room).emit('typing'));

  socket.on('stop typing', room => socket.in(room).emit('stop typing'));

  socket.on('new message', async newMessageRecieved => {
    let chat = newMessageRecieved.chat[0]; // Change it to object

    const list = await Chat.findOne({ _id: chat }).populate(
      'users',
      '-password'
    );

    if (!list.users) return console.log('chat.users not defined');

    list.users.forEach(user => {
      if (user._id === newMessageRecieved.sender) {
        return;
      } else {
        console.log('hey');

        console.log({ tathrt: user._id });
        socket.in(chat).emit('message recieved', newMessageRecieved);
      }
    });
  });

  socket.off('setup', () => {
    console.log('User Disconnected');
    socket.leave(userData.user._id);
  });
});
