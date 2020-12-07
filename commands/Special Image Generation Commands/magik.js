const Discord = require('discord.js');
const client = require('alexflipnote.js');
const alexclient = new client(process.env.AFAPI_KEY);
//

module.exports.run = async (client, message, args) => {
		try {
			const user = message.mentions.users.first() || message.author;
			let link = await alexclient.image.magik({image: user.displayAvatarURL({ format: 'png', size: 512 })});
			const magembed = new Discord.MessageEmbed()
				.setTitle(`Merasmus is here. MAGIK!`)
				.attachFiles({ attachment: link, name: "magik.png" })
				.setImage(`attachment://magik.png`)
				.setColor('RANDOM')
				.setFooter(`Invoked by ${message.author.username}, provided by api.alexflipnote.dev`, message.author.avatarURL());
			message.channel.send(magembed);
		} catch (err) {
			console.log(err);
	  }
};

module.exports.help = {
    name: "magik",
    description: "Merasmus is here. MAGIK!",
    aliases: []
};
