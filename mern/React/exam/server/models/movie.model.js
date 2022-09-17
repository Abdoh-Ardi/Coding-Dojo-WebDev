const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    // validate: {
    //   validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
    //   message: "Please enter a valid email",
    // },
  },
  rating: {
    type: Number,
    required: [true, "rating is required"]
  },
  // review can be array to store many reviews 
  //FIXME store review
  review: {
    type: [],
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
