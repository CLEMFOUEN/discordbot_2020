module.exports = {
  name: 'userinfo',
  description: 'Renvoie les informations d\'un utilisateur mentionné',
  execute(client, message, args) {
    const user_mention = message.mentions.users.first();
    message.channel.send(`Voici le tag de la personne mentionné: ${user_mention.tag}`);
  }
}