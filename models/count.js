const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  count: {
    type: Number, // stringify chart state object?
    require: true,
  },
});

const Count = mongoose.model("Count", countSchema);
module.exports = Count;
