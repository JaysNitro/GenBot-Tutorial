const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzQzNTI4MTM1MDU1OTAwNzQ1.XzV-iQ.YRwoE3hbcX-29s5bAfFGK5tp738';
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}});
});
client.on('message', message =>{
    if (message.content === '!nitro'){
        message.author.send('https://discord.gift/2acKKaMtRDT6eEpSYDfpzta8');
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=nitro'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `test1
    test2
    test3
    test4
    test5`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.login(token);
