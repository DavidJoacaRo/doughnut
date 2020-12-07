const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
const { embedcolor } = require('../../config.json');

module.exports.run = async (client, message, args) => {
		try {
			let link = await alexclient.image.captcha({text: args.join(' ')});
			const cembed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} needs someone to solve this captcha`)
				.attachFiles({ attachment: link, name: "ccaptcha.png" })
				.setImage(`attachment://ccaptcha.png`)
				.setCOlor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(cembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "customcaptcha",
    description: "Creates custom checkbox reCAPTCHA v2 styled images.",
    aliases: ['ccaptcha']
};
