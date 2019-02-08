const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543536308681965578")
setInterval(function() {
channel.send(`mostafa mostafa mostafa mostafa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);