const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args, settings, dbUser) => {
  message.reply(`tu possèdes ${dbUser.experience} points d'expérience!`);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;
