const Discord = require('discord.js');
const canvacord = require('canvacord');
//

module.exports.run = async (client, message, args) => {
		try {
			let image = await canvacord.Canvas.clyde(args.join(' '));
	    let attachment = new Discord.MessageAttachment(image, "clyde.png");
			const cembed = new Discord.MessageEmbed()
				.setTitle(`Only you can see this message`)
				.attachFiles({ attachment: image, name: "clyde.png" })
				.setImage(`attachment://clyde.png`)
				.setColor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(cembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "clyde",
    description: "Simulates a message sent by Clyde.",
    aliases: []
};
