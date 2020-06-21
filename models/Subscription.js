const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subscriptionSchema = new Schema ({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("subscription", subscriptionSchema)