const express = require("express");
const {
    newuser,
    newuser2,
    newuser3,
    newuser4,
    new5
} = require("../controllers/user_controller");

const router = express.Router();

router.get("/", newuser);
router.get("/home2", newuser2);
router.get("/aboutus", newuser3);
router.get("/contactus", newuser4);
router.get("/productes", new5);

module.exports = router;
