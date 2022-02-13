import log4js from "log4js"
import { DEBUG_LEVEL } from "../config"

log4js.configure({
    appenders: { app: { type: "file", filename: "app.log" } },
    categories: { default: { appenders: ["app"], level: DEBUG_LEVEL } }
})

const logger = log4js.getLogger('app')

export default class LogHandler {
    static debug(log: string) {
        logger.debug(log)
    }
    static info(log: string) {
        logger.info(log)
    }
    static error(log: string) {
        logger.error(log)
    }
}