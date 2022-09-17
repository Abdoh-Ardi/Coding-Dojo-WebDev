const PetController = require("../controllers/pet.controller");
const { authenticate } = require("../middlewares/authjwt");

function addpetRoutes(app) {
    // app.post("/api/signup", UserController.signup);
    // app.post("/api/login", UserController.login);

    // app.get("/api/users", authenticate, UserController.getAllUsers);
    app.get("/api/pets", PetController.getAllPets);
    app.post("api/new/pet",PetController.addpet);
    app.post("/api/remove/pet",PetController.removePet)
}

module.exports = addpetRoutes;
