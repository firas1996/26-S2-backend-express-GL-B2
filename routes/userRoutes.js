const {
  createUser,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/createuser", createUser);
router.get("/getUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);

module.exports = router;
