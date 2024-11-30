// module that defines the routes related to brands using the Express.js framework.
const express = require("express");
const router = express.Router();

const {
  getBrandValidator,
  createBrandValidator,
  deleteBrandValidator,
  updateBrandValidator,
} = require("../utils/validators/BrandValidator");

const {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  UploadBrandImage,
  resizeimage,
} = require("../services/BrandService");

router
  .route("/")
  .get(getBrands)
  .post(UploadBrandImage, resizeimage, createBrandValidator, createBrand);
router
  .route("/:id")
  .get(getBrandValidator, getBrand)
  .put(UploadBrandImage, resizeimage, updateBrandValidator, updateBrand)
  .delete(deleteBrandValidator, deleteBrand);

module.exports = router;
