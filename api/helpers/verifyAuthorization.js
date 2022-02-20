const verifyUserToken = require("../helpers/verifyUserToken");

const verifyAuthorization = async (req, res, next) => {
    verifyUserToken(req, res, ()=> {
        try {
            const userId = req.user.id;
            const isAdmin = req.user.isAdmin;
            if (userId === req.params.userId || isAdmin === true) {
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

module.exports = verifyAuthorization;