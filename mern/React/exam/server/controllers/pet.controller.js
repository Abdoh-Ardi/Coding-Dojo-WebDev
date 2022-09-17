// const User = require("../models/user.model");
const Pet = require("../models/pet.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports.addpet = async function (req, res) {
    try {
        const pet = await Pet.create(req.body);
        res.json(pet);
    } catch (err) {
        res.status(400).json(err);
    }
};


module.exports.getAllPets = async function (req, res) {
    console.log(req.petId);//FIXME 
    const pets = await Pet.find();
    res.json(pets);
}
module.exports.removePet = async function (req, res) {
    console.log(req.petId);//FIXME 
    const pets = await Pet.find({ id: req.petId }).deleteOne();
    // pets
    res.json(pets);
}

// module.exports.login = async function (req, res) {
//     try {
//         const user = await User.findOne({
//             email: req.body.email,
//         });

//         const correctPassword = await bcrypt.compare(req.body.password, user.password)
//         if (!correctPassword) {
//             return res.sendStatus(400)
//         }
//         const payload = {
//             userId: user.id
//         }
//         const secretKey = process.env.JWT_SECRET_KEY
//         const token = jwt.sign(payload, secretKey)

//         res.json({ userToken: token })

//     } catch (err) {
//         res.sendStatus(400);
//     }
// };
