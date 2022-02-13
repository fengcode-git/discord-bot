import LogHandler from "./LogHandler";

export default class ErrorHandler {
    static write(err: Error) {
        console.error(err.message)
        LogHandler.error(`error: ${JSON.stringify({ errorMessage: err.message, errorStack: err.stack })}`);
    }
}