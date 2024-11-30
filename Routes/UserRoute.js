const express = require("express");
// const authService = require("../services/authService");

const {
  getUserValidator,
  createUserValidator,
  deletUserValidator,
  updateUserValidator,
  changeUserpasswordValidator,
  //   updateUserLoggedValidator,
} = require("../utils/validators/UserValidator");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  UploadUserImage,
  resizeimage,
  changeUserPassword,
} = require("../services/UserService");

const router = express.Router();

// router.use(authService.protect);
// router.get("/getMe", getLoggedUserData, getUser);
// router.put("/changemypassword", UpdateUserLoggedPassword);
// router.put("/updatemydata", updateUserLoggedValidator, UpdateLoggedUserData);
// router.delete("/deletme", deletUserLoggedData);

// admin
// router.use(authService.allowedTo("admin", "manager"));
// router.put(
//   "/changePassword/:id",
//   changeUserpasswordValidator,
//   changeUserPassword
// );

router.put(
  "/changePassword/:id",
  changeUserpasswordValidator,
  changeUserPassword
);
router
  .route("/")
  .get(getUsers)
  .post(createUserValidator, UploadUserImage, resizeimage, createUser);
router
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(updateUserValidator, UploadUserImage, resizeimage, updateUser)
  .delete(deletUserValidator, deleteUser);

module.exports = router;
