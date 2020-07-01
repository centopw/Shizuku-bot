const Discord = require('discord.js');
});

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Comming soon")
}

module.exports.config = {
    name: "osu",
    description: "Shows the information of a osuplayer",
    usage: "?osu",
    accessableby: "Members",
    aliases: ['osu']
}