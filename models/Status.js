const mongoose = require("mongoose")
const Schema = mongoose.Schema

const statusSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Status", statusSchema)