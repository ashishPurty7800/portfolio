const express = require("express");
const router = express.Router();

const { login, addDetails, deleteDetails, getDetails } = require("../controllers/Auth");

router.post("/login", login);
router.post("/addDetails", addDetails);
router.post("/deleteDetails", deleteDetails);
router.get("/getDetails", getDetails);

module.exports = router;