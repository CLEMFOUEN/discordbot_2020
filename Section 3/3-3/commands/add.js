module.exports = {
  name: 'add',
  description: 'Ajouter un rôle!',
  execute(client, message, args) {
    let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role) {
      if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce rôle! Essayez à nouveau!");
      if (role.permissions.has('KICK_MEMBERS')) return message.channel.send("Vous ne pouvez pas avoir ce rôle!");

      message.member.roles.add(role)
        .then(m => message.channel.send(`Vous possédez maintenant le role ${role}.`))
        .catch(e => console.log(e));
    } else {
      message.channel.send("Le rôle n'existe pas!");
    }
  }
}