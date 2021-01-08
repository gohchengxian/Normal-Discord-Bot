module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  const prefix = client.prefix;
  if (message.mentions.users.first() === client.user) {
    message.channel.send(new client.discord.RichEmbed().setDescription(`My prefix is \`\`${prefix}\`\``).setColor("RANDOM"))
  } else {
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase();
    const command = message.content.slice(prefix.length).split(" ")[0];
    const cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!cmd) return ;
    cmd.run(client, message, args);
  }
};