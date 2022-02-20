const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser")

server.use(express.json());
server.use(morgan("common"));
server.use(helmet());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

server.use("/", routes)
// server.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://lucakail:gifted123@backtestingdb.c0gud.mongodb.net/otraCosa?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
)
    .then(()=>{console.log("Database connection successful.")})
    .catch((err) => {
    console.log(err);
 });

server.listen(3001, ()=> {
    console.log("Server succesfully listening on port 3000");
})


