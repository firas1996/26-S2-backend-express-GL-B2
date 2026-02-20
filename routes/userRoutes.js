const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const router = require("express").Router();

router.route("/").post(createUser).get(getAllUsers);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
