const { Router } = require("express");
const Discord = require("discord.js");
let client = new Discord.Client();
let fs = require("fs");
const Enmap = require("enmap");
const cd = new Set();
client.discord = Discord;
client.discord.RichEmbed = Discord.MessageEmbed;
client.prefix = "?";
client.cd = cd;
const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + "ping Received");
  response.sendStatus(404);
});
app.listen(process.env.PORT);

fs.readdir("./handlers/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./handlers/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command: ${commandName}`);
    client.commands.set(commandName, props);
  })
})

client.login(process.env.token);