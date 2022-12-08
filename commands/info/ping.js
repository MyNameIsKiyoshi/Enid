const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "ping",
    category: "info",
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new EmbedBuilder()
                .setColor(0x00FF00)
                .setTitle(`My Ping is ${client.ping}ms`)
                .setAuthor({ name: `${client.name}`, iconURL: `${client.iconURL}`, url: 'https://kiyoshi.space' })
                .setDescription(`Generated at ${new Date().toLocaleString()}`)
                .setThumbnail(`${client.iconURL}`)
                .setImage(`${client.iconURL}`)
                .setFooter({ text: 'Author: Enid', iconURL: `${client.iconURL}` })
            ]
        })
    }
}