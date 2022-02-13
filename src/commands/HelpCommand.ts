import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction, CacheType, MessageEmbed } from "discord.js";
import ErrorHandler from "../utils/ErrorHandler";
import BaseCommand from "./BaseCommand";

export default class HelpCommand extends BaseCommand {
    data(): SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder {
        return new SlashCommandBuilder().setName("help").setDescription("帮助命令")
    }
    async run(interaction: CommandInteraction<CacheType>) {
        try {
            await interaction.deferReply()
            const helpEmbed = new MessageEmbed()
            helpEmbed.setTitle("帮助")
            helpEmbed.setDescription("帮助内容")
            await interaction.editReply({ embeds: [helpEmbed] });
        } catch (error) {
            ErrorHandler.write(error)
        }
    }
}