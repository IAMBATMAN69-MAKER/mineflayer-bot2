const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'nigaserver69.aternos.me',  // Replace with your Aternos server IP
  port: 24754,  // Replace with your Aternos server port
  username: 'BotPRO'      // Replace with the bot's username
});

bot.on('spawn', () => {
  // Make the bot jump and sprint continuously
  setInterval(() => {
    bot.setControlState('jump', true);  // Makes the bot jump
    bot.setControlState('sprint', true); // Makes the bot sprint
  }, 100);  // Adjust interval for speed

  // Random chat messages
  setInterval(() => {
    const messages = [
      "Hello there!", 
      "Good day!", 
      "Hi everyone!", 
      "I am here!",
      "Anyone need help?", 
      "I'm just botting around!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    bot.chat(randomMessage);
  }, 5000); // Adjust message interval (5000ms = 5 seconds)
});

bot.on('end', () => {
  console.log("Disconnected. Reconnecting...");
  setTimeout(() => bot.connect(), 5000);  // Reconnect on disconnect
});
