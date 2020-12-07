const Discord = require('discord.js');
const canvacord = require('canvacord');
//

module.exports.run = async (client, message, args) => {
		try {
			var user = message.mentions.users.first() || message.author;
		  let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		  let image = await canvacord.Canvas.wanted(avatar);
		  let attachment = new Discord.MessageAttachment(image, "wanted.png");
			const magembed = new Discord.MessageEmbed()
				.setTitle(`Dead or Alive`)
				.attachFiles({ attachment: image, name: "wanted.png" })
				.setImage(`attachment://wanted.png`)
				.setCOlor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by Canvacord`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "wanted",
    description: "Wants... you?",
    aliases: []
};
