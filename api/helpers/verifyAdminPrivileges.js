const verifyUserToken = require("./verifyUserToken");

const verifyAdminPrivileges = async (req, res, next) => {
    verifyUserToken(req, res, () => {
        try {
            const isAdmin = req.user.isAdmin;
            if (isAdmin === true) {
                next();
            }
            else {
                throw "You're not allowed to see or change other users' information!"
            }
        }
        catch (err) {
            res.send(err);
        }
    })
}

module.exports = verifyAdminPrivileges;