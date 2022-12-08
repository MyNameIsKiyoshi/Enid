const {Client, Collection} = require('discord.js')
require('dotenv').config()

const client = new Client({intents: 3276799});

let bot = {
    client, 
    prefix: "fluff.",
    owners: ["1025130760371441766"]
}

client.commands = new Collection()
client.events = new Collection()
client.slashcommands = new Collection()
client.buttons = new Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)
client.loadButtons(bot, false)


module.exports = bot

client.login(process.env.TOKEN)