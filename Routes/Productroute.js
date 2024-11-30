const express = require("express");
const router = express.Router();

const {
  getProductValidator,
  createProductValidator,
  deleteProductValidator,
  updateProductValidator,
} = require("../utils/validators/ProductValidator");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  resizeproductimage,
  UploadProductImage,
} = require("../services/ProductService");

// Post or Get /products/asfgsgeewf4g5s/reviews

router
  .route("/")
  .get(getProducts)
  .post(
    UploadProductImage,
    resizeproductimage,
    createProductValidator,
    createProduct
  );
router
  .route("/:id")
  .get(getProductValidator, getProduct)
  .put(
    UploadProductImage,
    resizeproductimage,
    updateProductValidator,
    updateProduct
  )
  .delete(deleteProductValidator, deleteProduct);

module.exports = router;
