const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, msg, args) => {
  if(!msg.channel.nsfw) return msg.channel.send("You must in NSFW channel")
  const { body } = await superagent.get("https://cdn.nic20.tk/api/type=porn");
   msg.channel.send(new Discord.MessageEmbed().setImage(body.url).setColor("RANDOM"))
}