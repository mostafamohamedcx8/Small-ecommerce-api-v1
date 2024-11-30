const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const morgan = require("morgan");
const MountRoutes = require("./Routes");
const globalError = require("./middleware/errorMiddleware");
const ApiError = require("./utils/apiError");
const dbconnection = require("./config/database");

const app = express();

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode :${process.env.NODE_ENV}`);
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));
// Mount Routes
MountRoutes(app);

app.all("*", (req, res, next) => {
  next(new ApiError(`can't find thos route: ${req.originalUrl}`, 400));
});
//Global error handling middleware
app.use(globalError);

// Connect to the MongoDB database
dbconnection();

const Port = process.env.PORT || 5000;
const server = app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

// Handel rejection error outside exprees
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
