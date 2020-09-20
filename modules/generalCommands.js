const Discord = require('discord.js');
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', async (message) => 
{
    if (message.author.bot) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) 
	{
        message.channel.send('Wanna help fixing bugs or make new features? The repository can be found here: https://github.com/DavidJoacaRo/doughnut');	
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}heartbeat`) || message.content.toLowerCase().startsWith(`${PREFIX}ping`)) {
        console.log("Checking ping...");
        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(client.pi);

            m.edit('Bot ping is: ' + `${ping}ms`);
        });
        return;
    }
	
    if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) 
    {
        console.log("GTA 4 Pager!");
        message.channel.send("https://youtu.be/Ee4ATNFER_Y");
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}print`)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const chanel = await getUserFromMention(args[1]);
        const text = message.content.split(args[1] + " ")[1];
        try {
            if (chanel.permissionsFor(message.author).has('SEND_MESSAGES')) {
                chanel.send(text);
                message.delete();
                return;
            }
        } catch (err) {
            const chanel = args[1];
            if (text == null) {
                message.delete();
                message.channel.send(chanel);
                return;
            } else {
                message.delete();
                message.channel.send(chanel + " " + text);
                return;
            }
        }
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) 
    {
        message.channel.send('Nolan');
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}taskkill`)) 
    {
        if(message.author.id === "320985090022965258") {
          console.log("Sleeping mode activated, goodbye!")
          bot.destroy()
        } else {
          return message.channel.send(`fam u aren't the bot owner`);
        }
    }

    if (message.content.toLowerCase() == `${PREFIX}help`) 
    {
	    message.channel.send("A list of commands can be found here: https://davidjoacaro.github.io/doughnut/help/");
        return;
    }

    if (message.content.toLowerCase() == `${PREFIX}help music`) 
    {
	    message.channel.send("A list of commands can be found here: https://davidjoacaro.github.io/doughnut/help/ (again)");
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}support`)) {
        message.channel.send('Having trouble or found bugs? Report them here: https://discord.com/invite/ty6B3r');
        return;
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) 
    {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=462952932388896768&permissions=8&scope=bot')
        return;
    }


    if (message.content.toLowerCase() === (`${PREFIX}donate`)) 
    {
        const donatembed = new Discord.MessageEmbed()
            .setTitle('Support the Doughnut Project')
            .setDescription('You can support me on PayPal: paypal.me/davidgabriel01')
            .setColor('BLUE')
        message.channel.send(donatembed);
        return;
    }
	
//The man, the myth, the legend.	
    if (message.content.toLowerCase() === (`${PREFIX}credits`)) 
    {
        const creditsembed = new Discord.MessageEmbed()
        .setTitle('Bot Credits')
        .setDescription('DavidJoacaRo - Creator\nlambdagit101 - Helping me with the website, and fixing bugs.')
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
        message.channel.send(creditsembed);
        return;
    }
});

async function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        console.log(mention);
        return await client.channels.cache.get(mention);
    }
}