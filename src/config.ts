import * as dotenv from "dotenv"
dotenv.config()
export const TOKEN = process.env.TOKEN || ''
export const DEBUG_LEVEL = process.env.DEBUG_LEVEL || "error"
export const MONGO_URI = process.env.MONGO_URI || ""
export const DB_NAME = process.env.DB_NAME || ""
export const GUILD_ID = process.env.GUILD_ID || ""