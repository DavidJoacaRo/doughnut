const Discord = require('discord.js');
const canvacord = require('canvacord');
//

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
	    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
	    let image = await canvacord.Canvas.trigger(avatar);
	    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`${user.username} is triggered`)
				.attachFiles({ attachment: image, name: "triggered.gif" })
				.setImage(`attachment://triggered.gif`)
				.setColor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "trigger",
    description: "Triggers.",
    aliases: []
};
