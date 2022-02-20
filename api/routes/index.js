const router = require("express").Router();
const usersRoute = require("./users")
const homeRoute = require("./home");

router.use("/home", homeRoute);

router.use("/users", usersRoute);

module.exports = router;