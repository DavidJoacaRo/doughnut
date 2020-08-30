const { client, PREFIX } = require('../index'); // Import client from index.js
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const rapi = require('imageapi.js');

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.guild) return;
	if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) {
		randomPuppy('sbubby').then(url => {
			message.channel.send(url);
		});  
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) {
		randomPuppy('Animemes').then(url => {
			message.channel.send(url);
		});  
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) {
		randomPuppy('pics').then(url => {
			message.channel.send(url);
		});  
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
		randomPuppy('comedyheaven').then(url => {
			message.channel.send(url);
		});  
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}meme`)) {
		randomPuppy('dankmeme').then(url => {
			message.channel.send(url);
		})
	};

	if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) {
		randomPuppy('greentext').then(url => {
			message.channel.send(url);
		});  
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) {
		message.channel.send("Here is your avatar!");
		message.channel.send(message.author.displayAvatarURL());	
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}github`)) {
		message.channel.send("https://github.com/DavidJoacaRo/doughnut");	
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}puppy`)) {
		randomPuppy().then(url => {
			message.channel.send(url);
		});  
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
		randomPuppy('aww').then(url => {
			message.channel.send(url);
		});  
	}

	
	if (message.content.toLowerCase().startsWith(`${PREFIX}gta 4 pager`)) {
    	console.log("GTA 4 Pager!");
    	message.channel.send("https://youtu.be/Ee4ATNFER_Y"); //hmm
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}nolan`)) {
		console.log("Nolanized");
		message.channel.send('Nolan').then(sentMessage => {
			sentMessage.delete({timeout:35000});
		}); //get nolanized
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}help music`)) {
		console.log("Music helped");
		message.channel.send("https://davidjoacaro.github.io/doughnut/help"); //help
	}
		
	if (message.content.toLowerCase() == `${PREFIX}help`) {
		console.log("General helped");
		message.channel.send("https://davidjoacaro.github.io/doughnut/help");
	}
		
	if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) {
		console.log("Hey can somebody keep track of my heads batted in? BONK");
		message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png'); //haha, b o n k 
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}invite`)) {
		console.log("Invited link");
		message.channel.send('Invite link for Doughnut is: https://discord.com/api/oauth2/authorize?client_id=462952932388896768&permissions=8&scope=bot'); //Change your invite here
	}

	if (message.content.toLowerCase().startsWith(`${PREFIX}taskkill`)) {
		if(message.author.id === "320985090022965258") { // PLEASE MAKE SURE FOR THE GOD'S SAKE YOU EDITED THE ID BEFORE YOU SAY IT DOSEN'T WORK
			console.log("haha, bot go bye-bye");
			message.react('👋'); 
			client.destroy();
		} else {
			return message.channel.send(`**looks like you aren't the bot owner, get stick bugged lol?**\nhttps://tenor.com/view/stick-bugged-stick-bugged-get-stick-bugged-lol-gif-18039349`); //lmao yes
	}}

	if (message.content.toLowerCase() === (`${PREFIX}donate`)) {
		console.log("Hope they donate");
		const donatembed = new MessageEmbed()
		.setTitle('Support The Doughnut Project')
		.setColor('BLUE')
		.setDescription('\nhttps://www.paypal.com/paypalme/davidgabriel01\n') //Change the link to your paypal or bitcoin or etc etc etc
		.setFooter('*No additional things will be added to the bot like premium thing or something, w	e are all equal.')
		message.channel.send(donatembed);
	}

	if (message.content.toLowerCase() === (`${PREFIX}credits`)) {
		console.log("Made by lambdaguy101 and DavidJoacaRo");
		const creditsembed = new MessageEmbed()
		.setTitle('Credits')
		.setColor('RANDOM')
		.setDescription('Made by David.#7648 using discord.js. Thanks to lambdagit101 for letting me use their project.'); //Edit your credits here
		message.channel.send(creditsembed);
	}

});