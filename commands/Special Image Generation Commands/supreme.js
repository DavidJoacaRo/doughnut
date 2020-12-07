const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			let link = await alexclient.image.supreme({text: args.join(' ')});
			const suprembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} is rich`)
				.attachFiles({ attachment: link, name: "supreme.png" })
				.setImage(`attachment://supreme.png`)
				.setCOlor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(suprembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "supreme",
    description: "Makes a Supreme styled logo.",
    aliases: ['richify']
};
