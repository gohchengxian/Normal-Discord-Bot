const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, msg, args) => {
  const { body } = await superagent.get("https://cdn.nic20.tk/reddit/search?q=uncleroger");
   msg.channel.send(new Discord.MessageEmbed().setTitle(body.title).setURL(body.permalink).setImage(body.image_url).setColor("RANDOM").setFooter(`👍 ${body.upvotes} | 💬 ${body.comments}`))
}