const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    time: {
        type: Date, 
        default: Date.now 
    },
});

const Like = mongoose.model("Like", countSchema);
module.exports = Like;
