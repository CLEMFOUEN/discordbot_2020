const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
  name: 'dice',
  description: 'Renvoie la valeur de plusieurs dés!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
      .setColor("#d54e12")
      .setTitle("Random Dice")
      .attachFiles(diceImg)
      .setThumbnail('attachment://dice.png')
      .addFields(
        { name: "D#1", value: randomDice(), inline: true },
        { name: "D#2", value: randomDice(), inline: true },
        { name: "D#3", value: randomDice(), inline: true }
      )
      .addFields(
        { name: "D#4", value: randomDice(), inline: true },
        { name: "D#5", value: randomDice(), inline: true },
        { name: "D#6", value: randomDice(), inline: true }
      );
    
    message.channel.send(embed);
  }
}