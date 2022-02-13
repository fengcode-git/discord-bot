import Discord, { Intents } from "discord.js"
import { TOKEN } from "./config"
import DbHelper from "./database/DbHelper"
import { onInteraction } from "./events/onInteraction"
import onReady from "./events/onReady"

(async () => {
    await DbHelper.initialize()
    const client = new Discord.Client(
        {
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES
            ]
        }
    )
    client.on("ready", async () => await onReady(client))
    client.on("interactionCreate", async (interaction) => await onInteraction(interaction))
    await client.login(TOKEN)
})()