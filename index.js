const config = require("./config.json");
const token = require("./token.json");
if(!token.token) return console.log("Please put a token in the token.json folder.")
const Discord = require("discord.js");
const fs = require("fs");


const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    if(f.startsWith('-')) return;
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", async () => {
  console.log(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
  client.user.setActivity(`to Music`, {type: "LISTENING"}); 

});



client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "DIRECT_MESSAGE") return;
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
  if(!commandfile) {
    client.commands.forEach(command => {
      if(command.help.aliases) {
        if(command.help.aliases.includes(cmd.slice(prefix.length))) command.run(client,message,args)
      }
    });
  }
});

client.login(token.token);