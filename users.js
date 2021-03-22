const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client.guilds.cache.reduce((a, g) => a + g.memberCount, 0));
        client.user.setStatus('online')
        client.user.setPresence({
            game: {
                name: 'Member Count',
                type: "WATCHING",
                url: "https://github.com/KappasGithub/Total-Bot-Users"
            }
        });
    });

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');