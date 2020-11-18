const Discord = require('discord.js');
const { prefix, botname, gitlink, creator } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const hembed = new Discord.MessageEmbed()
        .setTitle(`Heya, I'm ${botname}!`)
		    .setDescription(`Are you looking for the command list? [Click here](https://davidjoacaro.github.io/doughnut/help/)`)
		    .setColor("RANDOM")
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
    message.channel.send(hembed);
};

module.exports.help = {
    name: "help",
    description: "Shows you information about the bot.",
    aliases: []
};
