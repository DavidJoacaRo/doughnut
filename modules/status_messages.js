const { client, PREFIX } = require('../index');
const intervalInMS = 15000;

let index = 0;

setInterval(() => {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        { type: 'WATCHING', name: `for branch conflicts | ${PREFIX}help`},
        { type: 'WATCHING', name: `${guildCount} Servers | ${PREFIX}help`},
        { type: 'LISTENING', name: `${userCount} Users | ${PREFIX}help`},
        { type: 'WATCHING', name: `for pull requests | ${PREFIX}help`},
        { type: 'WATCHING', name: `for changes on the repository | ${PREFIX}help`},
        { type: 'WATCHING', name: `Anime | ${PREFIX}help`}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
