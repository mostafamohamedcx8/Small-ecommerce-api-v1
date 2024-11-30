const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  SetCategoryIdToBody,
  CreateFilterObject,
} = require("../services/SubCategoryService");

const {
  deleteSubCategoryValidator,
  updateSubCategoryValidator,
  createSubCategoryValidator,
  getSubCategoryValidator,
} = require("../utils/validators/SubCategoryValidator");

router
  .route("/")
  .post(SetCategoryIdToBody, createSubCategoryValidator, createSubCategory)
  .get(CreateFilterObject, getSubCategories);
router
  .route("/:id")
  .get(getSubCategoryValidator, getSubCategory)
  .put(updateSubCategoryValidator, updateSubCategory)
  .delete(deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
