const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/createuser", createUser);
router.get("/getUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);
router.patch("/updateUserById/:id", updateUserById);

module.exports = router;
