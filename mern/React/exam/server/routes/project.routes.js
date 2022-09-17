const ProjectController = require("../controllers/project.controller");
// const { authenticate } = require("../middlewares/authjwt");

function registerProjectRoutes(app) {
    // app.post("/api/signup", UserController.signup);
    // app.post("/api/login", UserController.login);
    // app.get("/api/users", authenticate, UserController.getAllUsers);
    // app.get("/api/users", UserController.getAllUsers);
    // app.post("/api/getMovie",MovieController.getMovie);
    // app.get("/api/getMovie",MovieController.getMovie);
    // app.post("/api/addReview", MovieController.updateExistingMovie);
    // app.post("/api/deleteMovie", MovieController.deleteAnExistingMovie);

    app.get("/api/projects", ProjectController.getAllProjects);
    app.post("/api/addProject", ProjectController.addProject);
    app.post("/api/deleteProject", ProjectController.deleteAnExistingProject);
    app.post("/api/getProjectByID", ProjectController.getProjectByID);
    app.post("/api/updateProjectStatus", ProjectController.updateProjectStatus);
}

module.exports = registerProjectRoutes;
