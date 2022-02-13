import Discord from "discord.js"
import { CommandList } from "../commands/CommandList"
import { GUILD_ID } from "../config"

const onReady = async (client: Discord.Client)=>{
    console.log("机器人正在运行中...")
    const guild = client.guilds.cache.get(GUILD_ID)
    if (guild) {
        let commands = guild.commands
        CommandList.forEach(item => {
            commands.create(item.data().toJSON())
        })
    }
}
export default onReady