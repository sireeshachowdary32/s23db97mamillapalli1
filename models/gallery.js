const mongoose = require("mongoose")
const gallerySchema = mongoose.Schema({
gallery_name: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Gallery",
gallerySchema)
