const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Pet Name is required"],
        minLength: [3, "pet Name must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, "Pet Type is required"],
        minLength: [3, "pet type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "pet description is required"],
        minLength: [3, "pet description must be at least 3 characters"]
    },
    skill1: { type: String, },
    skill2: { type: String, },
    skill3: { type: String, },
    // email: {
    //     type: String,
    //     required: [true, "Email is required"],
    //     validate: {
    //         validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
    //         message: "Please enter a valid email",
    //     },
    // },
    // password: {
    //     type: String,
    //     required: [true, "Password is required"],
    //     minLength: 4,
    // },
});

// UserSchema.virtual("confirmPassword")
//     .get(() => this._confirmPassword)
//     .set((value) => (this._confirmPassword = value));


// UserSchema.path("password").validate(function () {
//     console.log(this.password, this._confirmPassword)
//     if (this.password != this.confirmPassword) {
//         this.invalidate("confirmPassword", "Passwords do not match");
//     }
// });

// UserSchema.pre("save", function (next) {
//     if (!this.isModified("password")) {
//         next();
//     } else {
//         bcrypt.hash(this.password, 10).then((hashedPassword) => {
//             this.password = hashedPassword;
//             next();
//         });
//     }
// });

module.exports = mongoose.model("Pet", PetSchema);
