import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js";

export default abstract class BaseCommand {
    abstract data(): SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder
    abstract run(interaction: CommandInteraction): Promise<void>
}