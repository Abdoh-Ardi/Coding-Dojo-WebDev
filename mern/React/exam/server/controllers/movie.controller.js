const Movie = require("../models/movie.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.addMovie = async function (req, res) {
    try {
        
        const movie = await Movie.create(req.body);
        res.json(movie);
    } catch (err) {
        res.status(400).json(err);
    }
};
module.exports.deleteAnExistingMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



module.exports.getAllMovies = async function (req, res) {
    // console.log(req.userId)
    const movies = await Movie.find();
    res.json(movies)
}
module.exports.getMovie = async function (req, res) {
    const movie = await Movie.findById({ _id: req.params.id });
    res.json(movie);
}

// module.exports.addReviewToMovie = async function (req, res) {

// }
module.exports.updateExistingMovie = (req, res) => {
    console.log(req.body);
    console.log(req.body);
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        // { $push: { friends: objFriends  },
        // { new: true, runValidators: true }
    )
        .then(updatedMovie => res.json({ movie: updatedMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
