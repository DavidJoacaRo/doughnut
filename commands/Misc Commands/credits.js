const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const creditsembed = new Discord.MessageEmbed()
        .setTitle('Doughnut Bot Info')
		    .setColor("RANDOM")
        .setDescription(`Forked from lambdaguy101's JuiceBot. This fork is a modification from the original bot.`)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(creditsembed);
};

module.exports.help = {
    name: "credits",
    description: "Shows info about the main collaborators and project creator.",
    aliases: []
};
