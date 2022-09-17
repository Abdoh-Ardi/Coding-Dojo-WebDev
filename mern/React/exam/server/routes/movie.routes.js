const MovieController = require("../controllers/movie.controller");
// const { authenticate } = require("../middlewares/authjwt");

function registerMovieRoutes(app) {
    // app.post("/api/signup", UserController.signup);
    // app.post("/api/login", UserController.login);

    // app.get("/api/users", authenticate, UserController.getAllUsers);
    // app.get("/api/users", UserController.getAllUsers);
    app.get("/api/movies", MovieController.getAllMovies);
    // app.post("/api/getMovie",MovieController.getMovie);
    // app.get("/api/getMovie",MovieController.getMovie);
    app.post("/api/addMovie", MovieController.addMovie);
    app.post("/api/addReview", MovieController.updateExistingMovie);
    app.post("/api/deleteMovie", MovieController.deleteAnExistingMovie);

}

module.exports = registerMovieRoutes;
