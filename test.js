'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: '1852501198148649',
  verifyToken: 'DogLover49',
  appSecret: '42a36e93c78b5d0798dfc1be514c254a'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();
