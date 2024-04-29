const mongoose = require("mongoose");
const Schema = mongoose.schema;

const CollegeSchema = new Schema({
  College: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
  },
});

module.exports + mongoose.models("college", CollegeSchema);
