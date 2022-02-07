import DiscordJS, { Intents } from "discord.js"
import { TOKEN } from "./config"

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log("机器人正在运行中...")
})

client.on("messageCreate", (message) => {
    if (message.content === "hello") {
        message.reply({
            content: "您好"
        })
    }
})

client.login(TOKEN)