module.exports = {
    name: "ping",
    category: "info",
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send(`Pong! \`${client.ws.ping}ms\``)
    }
}