const express = require("express")

const connect = require("./configs/db")

const userController = require("./controllers/user.controller");

const moviesController = require("./controllers/movie.controller")

const theaterController = require("./controllers/theater.controller")

const screenController = require("./controllers/screen.controller")

const showController = require("./controllers/show.controller")

const app = express();

app.use(express.json());

app.use("/users",userController)
app.use("/movies",moviesController)
app.use("/theater",theaterController)
app.use("/screen",screenController)
app.use("/show",showController)


app.listen(2345, async function (){
    await connect();
    console.log("listening on port 2345")
})