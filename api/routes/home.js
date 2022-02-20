const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.send("hey this is homepage")
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = router;