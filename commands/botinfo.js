const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  try {
    let memberCount = 0;
    client.guilds.cache.forEach(guild => memberCount = memberCount + guild.memberCount);
    let infoEmbed = new Discord.MessageEmbed()
    .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.avatarURL()}`})
    .setFooter({ text: `${message.author.id}`, iconURL: `${message.author.avatarURL()}`})
    .setColor('RANDOM')
    .setTimestamp()
    .setThumbnail(client.user.avatarURL())
    .setTitle(`${client.user.username}#${client.user.discrim}`)
    .addField(`Prefix: `, `\`${config.prefix || "none"}\``, true)
    .addField(`Version: `, `\`${config.version || "none"}\``, true)
    .addField(`Developer: `, `\`${config.developerAt || "none"}\``, true)
    .addField(`Help Command:`, `\`${config.prefix}help\``, true)
    .addField(`Server Count:`, `${Array(client.guilds.cache).length  || "none"}`, true) 
    .addField(`Member Count:`, `${memberCount  || "none"}`, true) 
    .addField(`Server Invite:`, `${config.invite  || "none"}`, true) 
    console.log(memberCount)
    
    message.channel.send({ embeds: [infoEmbed] });
  } catch (e) {
    console.log(e)
    console.log(e.message)
  }
}



module.exports.help = {
  name:"botinfo",
  description: "Get information about the bot.",
  catagory: "Utilities",
  usage: "botinfo",
  example: "botinfo",
  ver: "1.0.0"
}
