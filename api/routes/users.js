const router = require("express").Router();
const verifyToken = require("../helpers/verifyUserToken")
const verifyAuthorization = require("../helpers/verifyAuthorization");
const verifyAdminPrivileges = require("../helpers/verifyAdminPrivileges");

const {getAllUsers, 
       getUserById,
       registerUser,
       deleteUser,
       updateUser,
       loginUser} = require("../controllers/users");


router.get("/", verifyAdminPrivileges, getAllUsers);

router.post("/register", registerUser);

router.post("/login", loginUser)

router.get("/:userId", verifyAuthorization, getUserById);

router.delete("/:userId", verifyAdminPrivileges, deleteUser);

router.put("/:userId", verifyAuthorization, updateUser);

module.exports = router;