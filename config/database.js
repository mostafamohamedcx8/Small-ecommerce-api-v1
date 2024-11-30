const mongoose = require("mongoose");

// Connect to MongoDB
const dbConnection = () => {
  mongoose.connect(process.env.DB_URI).then((conn) => {
    console.log(`DataBase Connected to: ${conn.connection.host}`);
  });
};

module.exports = dbConnection;
