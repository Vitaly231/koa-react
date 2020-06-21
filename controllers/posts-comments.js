const Router = require("koa-router")
const passport = require("koa-passport")

const Post = require("../models/Post")

const router = new Router().prefix("/posts/:postId/comments")

router.post("/", passport.authenticate("jwt", {session: false}), async (ctx) => {
const post = await Post.findById(ctx.params.postId)
    if(!post) {
        ctx.throw(404, "Объявление не было найден")
    }
    const {body} = ctx.request.body
    post.coments.unshift({ body, user: ctx.state.user._id})
    ctx.body = await post.save()
})

router.delete("/:commentId", passport.authenticate("jwt", {session: false}), async (ctx) => {
const post = await Post.findById(ctx.params.postId)
    if(!post){
        ctx.throw(404, "Пост не был найден")
    }
    const commentIndex = post.comments
        .findIndex( (c) => c._id.toString() === ctx.params.commentId )
    if (commentIndex < 0) {
        ctx.throw (404, "Комментарий не был найден")
    }
    post.comments.splice(commentIndex, 1)
    ctx.body = await post.save()
})

module.exports = router.routes()