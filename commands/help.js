const Discord = require("discord.js");
const { prefix } = require('../config.json')
let catagories = []
let none = "Not Set";

module.exports.run = async (client, message, args) => {
  try {
    let commandName;
    if(args[0]) commandName = args[0].toLowerCase();
      client.commands.forEach(command => {
        if(command.help.aliases) if(command.help.aliases.includes(commandName)) return commandName = command.help.name;
    });
    function isCommand(String) {
      let cmd = client.commands.get(String)
      if(cmd) return true;
    }
    function catagorise(Array) {
      if(Array.catagory.toLowerCase()) {
        if(catagories.includes(Array.catagory.toLowerCase())) return;
        else catagories.push(Array.catagory.toLowerCase())
      }
    }
    client.commands.forEach(command => {
      catagorise(command.help)
    });
    if(!args[0]) {
      let noArgsEmbed = new Discord.MessageEmbed()
        .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.avatarURL()}` })
        .setFooter({ text: `${message.author.id}`, iconURL: `${message.author.avatarURL()}` })
        .setTitle("Help Embed")
        .setColor('RANDOM')
        .setTimestamp();
      catagories.forEach(catagory => {
        noArgsEmbed.addField(catagory, `\`${prefix}help ${catagory}\``, true)
      });
      message.channel.send({ embeds: [noArgsEmbed] })
    } else if (!catagories.includes(commandName)) {
      if(isCommand(commandName)) {
      let cmd = client.commands.get(commandName).help
      let commandHelpEmbed = new Discord.MessageEmbed()
        .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.avatarURL()}` })
        .setFooter({ text: `${message.author.id}`, iconURL: `${message.author.avatarURL()}` })
        .setTitle(`${cmd.name} Command`)
        .addField(`Description:`, `${cmd.description || none}`, )
        .addField(`Catagory:`, `\`${cmd.catagory || none}\``, true)
        .addField(`Usage:`, `\`${cmd.usage || none}\``, true)
        .addField(`Example:`, `\`${cmd.example || none}\``, true)
        .addField(`Version Added:`, `\`${cmd.ver || none}\``, true)
        .setTimestamp()
        .setColor('RANDOM');
      if(cmd.aliases) {
        commandHelpEmbed.addField("Aliases:", `\`${cmd.aliases.join('`, `')}\``, true)
      }
      return message.channel.send({ embeds: [commandHelpEmbed] })
      }
      else return message.channel.send({ content: "`This is not a command or a catagory please use \`${prefix}help\` to get a list of catagories`" })
    }
      else {
        let catagoryHelpEmbed = new Discord.MessageEmbed()
          .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.avatarURL()}` })
          .setFooter({ text: `${message.author.id}`, iconURL: `${message.author.avatarURL()}` })
          .setTitle(`${commandName} Catagory`)
          .setTimestamp()
          .setColor('RANDOM');
        client.commands.forEach(command => {
          if(command.help.catagory.toLowerCase() == commandName) catagoryHelpEmbed.addField(`${command.help.name}`, `\`${command.help.description}\``, true);
        });
        message.channel.send({ embeds: [catagoryHelpEmbed] })
      }
  } catch (e) {
    console.log(e)
    console.log(e.message) 
  }
}

module.exports.help = {
  name:"help",
  description: "Pull up this help embed.",
  catagory: "Utilities",
  usage: "help <catagory>",
  example: "help Utilities",
  aliases: ["h"],
  ver: "1.0.0"
}
