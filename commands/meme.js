const Discord = require("discord.js");
const superagent = require("superagent");

async function GetMEME(){
  const { body } = await superagent.get("https://cdn.nic20.tk/meme");
  return CheckImage(body)
};

function CheckImage(body){
  if(body.is_video){
    return GetMEME()
  } else {
    return body
  }
};

exports.run = async (bot, msg, args) => {
  const body = await GetMEME();
  msg.channel.send(new Discord.MessageEmbed()
  .setTitle(body.title).setColor("RANDOM").setURL(body.permalink).setImage(body.image_url)
  )
}