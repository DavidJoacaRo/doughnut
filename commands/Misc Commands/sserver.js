module.exports.run = async (client, message, args) => {
    try {
			message.author.send('Support server: `discord.gg/dTMYdtN`');
		} catch (err) {
			message.channel.send('Support server: `discord.gg/dTMYdtN`');
		}
};

module.exports.help = {
    name: "sserver",
    description: "Support Server. Yes, gives invite to support server so i can add a github command or anything",
    aliases: []
};
