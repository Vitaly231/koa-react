const Router = require("koa-router")
const passport = require("koa-passport")

const Status = require("../models/Status")

const router = new Router().prefix("/status")

router.put("/", passport.authenticate("jwt", {session: false}), async (ctx) => {
    const {status} = ctx.request.body
    const userId = ctx.state.user._id
    const id = ctx.params
        const candidate = await Status.find({userId})
        if (candidate.length !== 0) {
            ctx.body = await Status.findOneAndUpdate({userId}, {$set: {body: status}}, {})
            ctx.status = 201
        } else {
            ctx.body = await new Status({userId, body: status}).save()
            ctx.status = 201
        }
})

router.get("/:userId", async (ctx) => {
    const {userId} = ctx.params
    ctx.body = await Status.findOne({userId})


})

module.exports = router.routes()