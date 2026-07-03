const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    visitHistory: { type: Array, default: [] },
    clicks: { type: Number, default: 0 }
},{timestamps: true});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;