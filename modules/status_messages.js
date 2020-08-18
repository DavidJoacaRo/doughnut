const client = require('../index').client;
const intervalInMS = 15000;

let index = 0;

setInterval(() => {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        { type: 'WATCHING', name: `coronavirus cases | dn!help`},
        { type: 'WATCHING', name: `${guildCount} Servers | dn!help`},
        { type: 'LISTENING', name: `${userCount} Users | dn!help`},
        { type: 'WATCHING', name: 'for pull requests | dn!help'}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
