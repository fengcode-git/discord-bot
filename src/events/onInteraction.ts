import { Interaction } from "discord.js"
import { CommandList } from "../commands/CommandList"
import ErrorHandler from "../utils/ErrorHandler";

export const onInteraction = async (interaction: Interaction): Promise<void> => {
    try {
        if (interaction.isCommand()) {
            for (const Command of CommandList) {
                if (interaction.commandName === Command.data().name) {
                    await Command.run(interaction);
                    break;
                }
            }
        }
    } catch (err) {
        ErrorHandler.write(err);
    }
}