import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction, CacheType } from "discord.js";
import DbHelper from "../database/DbHelper";
import ErrorHandler from "../utils/ErrorHandler";
import BaseCommand from "./BaseCommand";

export default class VoteCommand extends BaseCommand {
    data(): SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder {
        let builder = new SlashCommandBuilder().setName("vote").setDescription("投票")
        builder.addNumberOption(option =>
            option.setRequired(true).setMinValue(0).setMaxValue(9999999).setName("price").setDescription("预测价格")
        )
        return builder
    }
    async run(interaction: CommandInteraction<CacheType>) {
        try {
            await interaction.deferReply()
            const { user } = interaction;
            let price = interaction.options.getNumber("price")
            await DbHelper.saveVote({
                userId: user.id,
                username: user.username,
                price: price,
                timestamp: Date.now(),
                discriminator: user.discriminator
            })
            let count = await DbHelper.getVoteCount(user.id)
            await interaction.editReply({
                content: `您第${count}次投票, 预测的价格是$${price}`
            });
        } catch (error) {
            ErrorHandler.write(error)
        }
    }
}