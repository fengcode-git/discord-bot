import BaseCommand from "./BaseCommand"
import HelpCommand from "./HelpCommand"
import QueryCommand from "./QueryCommand"
import VoteCommand from "./VoteCommand"

export const CommandList: BaseCommand[] = [
    // new HelpCommand(),
    new VoteCommand(),
    new QueryCommand()
]