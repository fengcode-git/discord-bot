export default interface Vote {
    userId: string,
    username: string,
    discriminator: string,
    timestamp: number,
    price: number
}