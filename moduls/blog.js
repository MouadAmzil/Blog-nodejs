const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSheam = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })
const blog = mongoose.model('blog', blogSheam)
module.exports = blog;













