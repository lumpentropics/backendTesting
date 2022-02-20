const jwt = require("jsonwebtoken");

const verifyUserToken = async (req, res, next) => {
    try {
        const userToken = req.header("Authorization");
        if (!userToken) throw "User must log in or information is forbidden to this user"
        if (userToken) {
            const verifiedUserToken = jwt.verify(userToken, "12345");
            req.user = verifiedUserToken;
            next();
        }
    }
    catch (err) {
        res.send(err);
    }
}

module.exports = verifyUserToken;