const { Client, Collection } = require('discord.js');
const { readdirSync } = require("fs"); // modif ici (destructuration)
const { TOKEN, PREFIX } = require('./config');

const client = new Client();
client.commands = new Collection();

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

loadCommands();

client.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args = message.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)) return;
  client.commands.get(command).run(client, message, args);
});

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));
client.login(TOKEN);
