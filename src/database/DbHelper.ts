import Vote from "./entity/Vote";
import { Db, MongoClient } from "mongodb"
import { DB_NAME, MONGO_URI } from "../config";
import ErrorHandler from "../utils/ErrorHandler";

export default class DbHelper {
    static client = new MongoClient(MONGO_URI)
    static db: Db

    static async initialize() {
        try {
            let conn = await this.client.connect()
            this.db = conn.db(DB_NAME)
            console.log("数据库连接成功!")
        } catch (error) {
            ErrorHandler.write(error)
            throw error
        }
    }

    static async saveVote(data: Vote) {
        await this.db.collection("Vote").insertOne(data)
    }

    static async getVoteCount(userId: string){
        return await this.db.collection("Vote").find({userId: userId}).count()
    }

    static async query(price: number): Promise<Vote> {
        let votes = await this.db.collection<Vote>("Vote").find({}).toArray()
        let minDiff = 9999999
        let result: Vote = null
        votes.forEach(item => {
            let diff = Math.abs(price - item.price)
            if (diff < minDiff) {
                result = item
                minDiff = diff
            }
        })
        return result
    }
}