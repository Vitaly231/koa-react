const Router = require("koa-router")

const auth = require("./auth")
const posts = require("./posts")
const postsLike = require("./posts-likes")
const postsComments = require("./posts-comments")
const users = require("./users")
const subscription = require("./subscription")
const status = require("./status")

const router = new Router().prefix("/api")

router.use(auth, posts, postsLike, postsComments, users, subscription, status)

module.exports = router