const Discord = require('discord.js');
const { prefix, botname, gitlink, creator } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const hembed = new Discord.MessageEmbed()
        .setTitle(`Heya, I'm ${botname}!`)
		    .setDescription(`Are you looking for the command list? [Click here](https://davidjoacaro.github.io/doughnut/help/)`)
		    .setColor("#ffda8f")
        .setFooter(`A new website is coming soon!`);
    message.channel.send(hembed);
};

module.exports.help = {
    name: "help",
    description: "Shows you information about the bot.",
    aliases: []
};
