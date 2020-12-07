const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			let link = await alexclient.image.didyoumean({top: args[0].replace(/-/g, ' '), bottom: args[1].replace(/-/g, ' ')});
			const cembed = new Discord.MessageEmbed()
				.setTitle(`Correction`)
				.attachFiles({ attachment: link, name: "didyoumean.png" })
				.setImage(`attachment://didyoumean.png`)
				.setCOlor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(cembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "didyoumean",
    description: "Best way to correct somebody.",
    aliases: ['correction']
};
