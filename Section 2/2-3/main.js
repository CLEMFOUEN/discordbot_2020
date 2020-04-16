const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith(`${PREFIX}salut`)) message.channel.send("Je suis le bot!")
  if (message.content.startsWith(`${PREFIX}ping`)) message.channel.send("Pong!")
});

client.login(TOKEN);
