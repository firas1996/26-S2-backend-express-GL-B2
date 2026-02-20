const { createUser, getAllUsers } = require("../controllers/userController");

const router = require("express").Router();

router.post("/createuser", createUser);
router.get("/getUsers", getAllUsers);

module.exports = router;
