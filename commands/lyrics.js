const Discord = require("discord.js");
const superagent = require("superagent");


exports.run = async (bot, msg, args) => {
  const { body } = await superagent.get("https://cdn.nic20.tk/lyrics?q=" + encodeURIComponent(args.join(" ")))
  msg.channel.send(new Discord.MessageEmbed()
  .setTitle(body.title).setColor("RANDOM").setURL(body.url).setDescription(body.lyrics)
  )
}