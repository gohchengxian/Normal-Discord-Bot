const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, msg, args) => {
  const { body } = await superagent.get("https://cdn.nic20.tk/joke");
   msg.channel.send(body.joke)
}