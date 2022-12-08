const run = async (client, interaction) => {
	try {
		const pingembed = new client.discord.MessageEmbed()
            .setTitle(`My Ping is ${client.client.ws.ping}ms`)
            .setDescription(`Generated at ${new Date().toLocaleString()}`)
            .setColor("PURPLE")
            .setFooter(`Command Sent By ${interaction.user.name}`, interaction.user.displayAvatarURL({ dynamic: true }))
		return interaction.reply({ embeds: [pingembed] })
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to send ping.`)
		}
	}
}

module.exports = {
	name: "ping",
	description: "Shows the bot's ping.",
	perms: "SEND_MESSAGES",
	options: [],
	run,
}
