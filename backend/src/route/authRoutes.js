const express = require("express");
const jwt = require("jsonwebtoken");
const admin = require("../auth/firebaseAdmin"); // Firebase Admin SDK

const router = express.Router();

router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;

    // console.log("Received Token:", token);

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    // Verify Google ID Token with Firebase
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { email, name, picture } = decodedToken;

    // Create JWT Token
    const jwtToken = jwt.sign({ email, name, picture }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ jwt: jwtToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid Google token", error: error.message });
  }
});

module.exports = router;
