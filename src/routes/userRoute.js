const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/:userId", userController.getUser);
router.put("/partner/:userId", userController.updateUserPartner);

module.exports = router;