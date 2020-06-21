const MongooseErrors = require("mongoose").Error

module.exports = async (ctx, next) => {
    try {
        await next()
    } catch (e) {
        if (e instanceof MongooseErrors) {
            ctx.throw(400, "Указаны неверные данные в запросе")
        } else {
            ctx.throw(e)
        }
    }
}