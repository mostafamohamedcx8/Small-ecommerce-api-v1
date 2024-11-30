const categoryroute = require("./CategoryRoute");
const subcategoriesroute = require("./SubCategoryRoute");
const BrandRoute = require("./BrandRoute");
const ProductRoute = require("./Productroute");
const UserRoute = require("./UserRoute");
const authRoute = require("./authroute");
const MountRoutes = (app) => {
  app.use("/api/v1/categories", categoryroute);
  app.use("/api/v1/subcategories", subcategoriesroute);
  app.use("/api/v1/brands", BrandRoute);
  app.use("/api/v1/products", ProductRoute);
  app.use("/api/v1/users", UserRoute);
  app.use("/api/v1/auth", authRoute);
};

module.exports = MountRoutes;
