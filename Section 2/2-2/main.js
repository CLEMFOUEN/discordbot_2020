const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'salut') message.channel.send("Je suis le bot!")
});

client.login('NzAwMzI0MDY5NjIyNTQ2NDQy.XphSBQ.a2N9WqBYHVegz9bohjq_k1-SvNU');
