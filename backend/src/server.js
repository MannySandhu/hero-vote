const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cardRoute = require("./route/card.route.js");
const authRoutes = require("./route/authRoutes.js");
const verifyJWT = require("./middleware/authMiddleware.js");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cards", verifyJWT, cardRoute);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB FIRST, then start the server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1); // Exit the process if DB connection fails
  });
