const { default: mongoose } = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,// TODO make sure its working as intended
        required: [true, "variable is required"],
        minLength: 3,
    },
    due: {
        type: Date,
        required: [true, "date is required"]
    },
    status: {
        type: String,
        //backlog -> in-progress -> completed
        default: 'backlog',
    }
    // listOfGeneric: [genericArraySchema],
},
    { timestamps: true });

projectSchema.plugin(uniqueValidator);
module.exports = mongoose.model("project", projectSchema);//




//Notes

// const genericArraySchema = new mongoose.Schema({
//     amount: { type: Number, required: true },
//     vendor: { type: String, required: true },
// },
//     { timestamps: { createdAt: true } });


// const mongoose = require("mongoose");
// // const bcrypt = require("bcrypt");

// const MovieSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, "Title is required"],
//     },
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         // validate: {
//         //   validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
//         //   message: "Please enter a valid email",
//         // },
//     },
//     rating: {
//         type: Number,
//         required: [true, "rating is required"]
//     },
//     // review can be array to store many reviews
//     // store review
//     review: {
//         type: [],
//     },
// });

// module.exports = mongoose.model("Movie", MovieSchema);//
// module.exports = mongoose.model("genericArraySchema", MovieSchema); is nothing on its own so no need to export subdocument