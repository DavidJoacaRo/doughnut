const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const gitembed = new Discord.MessageEmbed()
          .setTitle("Looking to contribute?")
          .setColor("#586270")
          .setDescription("Looking to add a new command, feature or fix a bug? Doughnut's GitHub repository can be found [here](https://github.com/DavidJoacaRo/doughnut)")
          .setThumbnail('https://cdn.discordapp.com/attachments/806890268015984660/807221077046198282/GitHub-Mark-Light-120px-plus.png')
        message.channel.send(gitembed)

};

module.exports.help = {
    name: "github",
    description: "Github repository",
    aliases: ['github']
};
