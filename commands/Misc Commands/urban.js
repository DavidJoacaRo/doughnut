const { prefix } = require('../../config.json');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const querystring = require('querystring');

module.exports.run = async (client, message, args) => {
    if (!args.length) {
		return message.channel.send('You need to supply a search term!');
	}

	const query = querystring.stringify({ term: args.join(' ') });

	const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

	if (!list.length) {
		return message.channel.send(`No results found for **${args.join(' ')}**.`);
	} else {
		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#134FE6')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.setFooter(`Invoked by ${message.author.username}, powered by api.urbandictionary.com`, message.author.avatarURL())
			.setThumbnail('https://cdn.discordapp.com/attachments/775608245200879639/778661083258159114/unnamedd.png')
			.addFields(
				{ name: 'Definition', value: answer.definition },
				{ name: 'Example', value: answer.example },
				{ name: 'Rating', value: `${answer.thumbs_up} 👍 ${answer.thumbs_down} 👎` }
			);

		message.channel.send(embed);
	}

};

module.exports.help = {
    name: "urban",
    description: "Searches up stuff on the Urban Dictionary.",
    aliases: ["urbandict"]
};
