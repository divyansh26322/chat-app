//userRoute.js
const express = require('express');
const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const verifyEmail = require('../controllers/emailVerifyController.js');
const profileController = require("../controllers/profileController.js");
const messageController = require("../controllers/messageController.js");
const peopleController = require("../controllers/peopleController.js");
const router = express.Router();
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/:id/verify/:token", verifyEmail);
router.get("/profile", profileController.profileController);
router.get("/messages/:userId", messageController);
router.get("/people", peopleController);
router.put("/profile/update", profileController.profileUpdate);
module.exports = router;
