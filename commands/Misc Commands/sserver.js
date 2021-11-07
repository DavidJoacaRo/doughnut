module.exports.run = async (client, message, args) => {
    try {
			message.author.send('Currently no support server. Contact the dev instead `David.#7643`');
		} catch (err) {
			message.channel.send('Currently no support server. Contact the dev instead `David.#7643`');
		}
};

module.exports.help = {
    name: "sserver",
    description: "Support Server. Yes, gives invite to support server so i can add a github command or anything",
    aliases: []
};
