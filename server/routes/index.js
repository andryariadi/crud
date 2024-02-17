const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/users", Controller.getUsers);
router.get("/users/:slug", Controller.getUserById);
router.post("/users/", Controller.createUser);
router.put("/users/:slug", Controller.updateUser);
router.delete("/users/:slug", Controller.deleteUser);

module.exports = router;
