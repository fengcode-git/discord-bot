import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction, CacheType } from "discord.js";
import DbHelper from "../database/DbHelper";
import ErrorHandler from "../utils/ErrorHandler";
import BaseCommand from "./BaseCommand";

export default class QueryCommand extends BaseCommand {
    data(): SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder {
        let builder = new SlashCommandBuilder().setName("query").setDescription("查询排名")
        builder.addNumberOption(option =>
            option.setRequired(true).setMinValue(0).setMaxValue(9999999).setName("price").setDescription("预测价格")
        )
        return builder
    }
    async run(interaction: CommandInteraction<CacheType>) {
        try {
            await interaction.deferReply()
            let price = interaction.options.getNumber("price")
            let vote = await DbHelper.query(price)
            if (vote == null) {
                await interaction.editReply({
                    content: `无人参与投票`
                })
            } else {
                await interaction.editReply({
                    content: `获奖者: ${vote.username}#${vote.discriminator}, 预测价格: $ ${vote.price}`
                })
            }
        } catch (error) {
            ErrorHandler.write(error)
        }
    }
}