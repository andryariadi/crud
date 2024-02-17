const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/users", Controller.getUsers);
router.get("/users/:id", Controller.getUserById);
router.post("/users/", Controller.createUser);
router.put("/users/:id", Controller.updateUser);
router.delete("/users/:id", Controller.deleteUser);

module.exports = router;
