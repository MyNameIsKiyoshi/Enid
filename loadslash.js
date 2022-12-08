const {Client, Collection} = require('discord.js');
require("dotenv").config()

const client = new Client({intents: 3276799});

client.slashcommands = new Collection()

let bot = {
    client,
}

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

const guildId = "1024629526518562876"

client.on("ready", async () => {
    console.log(`Loading ${client.slashcommands.size} slash commands`)

    const guild = client.guilds.cache.get(guildId)
    if (!guild)
        console.error("Target Guild not found")

    await guild.commands.set([...client.slashcommands.values()])
    console.log("Finished")
    process.exit(0)
})

client.login(process.env.TOKEN)