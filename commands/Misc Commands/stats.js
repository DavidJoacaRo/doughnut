const Discord = require('discord.js');
const { prefix, botname, gitlink, creator } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const hembed = new Discord.MessageEmbed()
    .setTitle(`${botname} statistics`)
		.setColor("#F2CA82")
		.setThumbnail('')
		.addFields(
			{ name: 'Total guilds', value: client.guilds.cache.size, inline: true },
			{ name: 'Total users', value: client.users.cache.size, inline: true },
			{ name: 'Prefix', value: 'dn!', inline: true },
			{ name: 'Main page', value: '[Click here](https://sites.google.com/view/doughnut-bot/home)' }
		)
    message.channel.send(hembed);
};

module.exports.help = {
    name: "stats",
    description: "Shows bot statistics.",
    aliases: ['statistics']
};
