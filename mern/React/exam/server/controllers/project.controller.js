// const Movie = require("../models/movie.model");
const Project = require("../models/project.model");
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken");
const { request } = require("express");
// const { findById } = require("../models/project.model");


module.exports.addProject = async function (req, res) {
    try {
        // project = {
        //     name: request.body.name,
        //     due: [req.body.due],
        //     //defualt value for status is back-log
        // };
        const project = await Project.create(req.body);
        // Alt way
        // Movie.create(movie).then(newlyCreatedMovie => res.json({
        //     movie: newlyCreatedMovie
        // })).catch(err => res.status(400).json(err));

        res.json(project);
    } catch (err) {
        // err.
        // console.log(err.name);
        res.status(400).json(err)
    }
};

module.exports.deleteAnExistingProject = (req, res) => {

    Project.deleteOne({ _id: req.body._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong during the deletion', error: err }));

}



module.exports.getAllProjects = async function (req, res) {
    // console.log(req.userId)
    const project = await Project.find();
    res.json(project)
}


module.exports.updateProjectStatus = async (req, res) => {
    try {
        //TODO projectID in react
        console.log(req.body);
        const project = await Project.findById(req.body._id);
        project.status = project.status == "backlog" ? "in-progress" : "Completed";//using it as a toggle since it goes one direction only
        await project.save();
    } catch (err) {
        console.log("Updating project by id exception : ", err);
    }


}
//maybe sort the back-log differently 


//not needed for exam
module.exports.getProjectByID = async function (req, res) {

    //const movieID = request.params.movieID;
    // const movie = await Movie.findById({ _id: movieID });
    //ALT way
    const project = await Project.findById({ _id: req.params.projectID });
    res.json(project);
}

// module.exports.updateProjectByID = async (req, res) => {
//     // console.log(req.body);
//     // console.log(req.body);
//     try {
//         const movie = await Movie.findById({ _id: req.params.movieID });
//         movie.reviews.push(request.body);
//         await movie.save();
//     } catch (err) {
//         console.log("Updating movie by id exception : ", err);
//     }
//     // Movie.findOneAndUpdate(
//     // { _id: req.params.id },
//     // req.body,
//     // { $push: { friends: objFriends  },
//     // { new: true, runValidators: true }
//     // )
//     //     .then(updatedMovie => res.json({ movie: updatedMovie }))
//     //     .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

