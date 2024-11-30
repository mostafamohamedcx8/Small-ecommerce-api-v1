const express = require("express");
const router = express.Router();
const subcategoriesRoute = require("./SubCategoryRoute");
const authService = require("../services/authService");

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deletCategoryValidator,
} = require("../utils/validators/CategoryValidator");
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  UploadCategoriesImage,
  resizeimage,
} = require("../services/CategoryService");

// Nested route
router.use("/:categoryId/subcategories", subcategoriesRoute);

router
  .route("/")
  .post(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    UploadCategoriesImage,
    resizeimage,
    createCategoryValidator,
    createCategory
  )
  .get(getCategories);
router
  .route("/:id")
  .get(getCategoryValidator, getCategory)
  .delete(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    deletCategoryValidator,
    deleteCategory
  )
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    UploadCategoriesImage,
    resizeimage,
    updateCategoryValidator,
    updateCategory
  );
module.exports = router;
